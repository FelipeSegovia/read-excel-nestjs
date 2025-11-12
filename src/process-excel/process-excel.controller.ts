import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { ProcessExcelService } from "./process-excel.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { RowValues } from "exceljs";
import Excel from "exceljs";

@Controller("process-excel")
export class ProcessExcelController {
  constructor(private readonly processExcelService: ProcessExcelService) {}

  @Post("basic")
  @UseInterceptors(FileInterceptor("file"))
  async processExcelFile(
    @UploadedFile() file: Express.Multer.File
  ): Promise<any> {
    const excelBuffer: Excel.Buffer = Buffer.from(
      file.buffer
    ) as unknown as Excel.Buffer;
    const processData = await this.processExcelService.processExcelFile(
      excelBuffer
    );

    const rowValues: RowValues[] = [];
    processData?.eachRow((row) => {
      const value: Excel.CellValue[] = [];
      row.eachCell((cell: Excel.Cell) => {
        if (cell.value) {
          value.push(cell.value);
        }
      });
      rowValues.push(value);
    });

    return {
      headerColumns: rowValues[0],
      valuesRows: rowValues.slice(1),
    };
  }
}

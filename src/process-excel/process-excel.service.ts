import { Injectable } from '@nestjs/common';
import Excel from 'exceljs';

@Injectable()
export class ProcessExcelService {
  private workbook: Excel.Workbook;

  constructor() {
    this.workbook = new Excel.Workbook();
  }

  processExcelFile = async (bufferFile: Excel.Buffer): Promise<Excel.Worksheet | null> => {
    await this.workbook.xlsx.load(bufferFile); // Cargar el archivo Excel desde el buffer

    const workSheet: Excel.Worksheet | undefined = this.workbook.getWorksheet(1); // Obtener la primera hoja de trabajo

    if(workSheet){
      return workSheet;
    }

    return null
  };
}

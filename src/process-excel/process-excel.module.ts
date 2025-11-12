import { Module } from '@nestjs/common';
import { ProcessExcelService } from './process-excel.service';
import { ProcessExcelController } from './process-excel.controller';

@Module({
  controllers: [ProcessExcelController],
  providers: [ProcessExcelService],
})
export class ProcessExcelModule {}

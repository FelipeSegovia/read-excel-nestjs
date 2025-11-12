import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProcessExcelModule } from './process-excel/process-excel.module';

@Module({
  imports: [ProcessExcelModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

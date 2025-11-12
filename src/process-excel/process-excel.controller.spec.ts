import { Test, TestingModule } from '@nestjs/testing';
import { ProcessExcelController } from './process-excel.controller';
import { ProcessExcelService } from './process-excel.service';

describe('ProcessExcelController', () => {
  let controller: ProcessExcelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProcessExcelController],
      providers: [ProcessExcelService],
    }).compile();

    controller = module.get<ProcessExcelController>(ProcessExcelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

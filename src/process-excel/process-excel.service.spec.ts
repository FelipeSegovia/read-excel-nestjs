import { Test, TestingModule } from '@nestjs/testing';
import { ProcessExcelService } from './process-excel.service';

describe('ProcessExcelService', () => {
  let service: ProcessExcelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProcessExcelService],
    }).compile();

    service = module.get<ProcessExcelService>(ProcessExcelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

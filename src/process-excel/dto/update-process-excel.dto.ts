import { PartialType } from '@nestjs/mapped-types';
import { CreateProcessExcelDto } from './create-process-excel.dto';

export class UpdateProcessExcelDto extends PartialType(CreateProcessExcelDto) {}

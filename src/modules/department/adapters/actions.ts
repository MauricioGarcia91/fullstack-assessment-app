'use server';

import { DepartmentUseCases } from '../use-cases';
import { DepartmentApiService } from './api-service';
import { DepartmentController } from './controller';

const departmentApiService = new DepartmentApiService();
const deparmentUseCases = new DepartmentUseCases(departmentApiService);
const departmentController = new DepartmentController(deparmentUseCases);

export const getAllDepartment = async () =>
  await departmentController.getAllDepartment();

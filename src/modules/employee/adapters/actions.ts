'use server';

import { Validator } from '@/utils/validator';
import { EmployeeUseCases } from '../use-cases';
import { EmployeeApiService } from './api-service';
import { EmployeeController } from './controller';
import { employeeSchema } from './schema';
import { EmployeeForm } from '../domain/definitions.d';

const employeeApiService = new EmployeeApiService();
const employeeUseCases = new EmployeeUseCases(employeeApiService);
const validator = new Validator(employeeSchema);
const employeeController = new EmployeeController(employeeUseCases, validator);

export const getAllEmployees = async () =>
  await employeeController.getAllEmployees();

export const deleteEmployee = async (id: string) =>
  await employeeController.deleteEmployee(id);

export const createEmployee = async (employeeForm: FormData) =>
  await employeeController.createEmployee(employeeForm);

export const getEmployeeById = async (id: string) =>
  await employeeController.getEmployeeById(id);

export const updateEmployee = async (
  id: string,
  employee: Partial<EmployeeForm>
) => await employeeController.updateEmployee(id, employee);

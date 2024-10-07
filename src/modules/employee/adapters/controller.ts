import { revalidatePath } from 'next/cache';

import { EmployeeUseCases } from '../use-cases';

import { Validator } from '@/utils/validator';
import { employeeSchema } from './schema';

import { Employee, EmployeeForm } from '../domain/definitions.d';

export class EmployeeController {
  private employeeUseCases: EmployeeUseCases;
  validator: Validator<(typeof employeeSchema)['shape']>;

  constructor(
    employeeUseCases: EmployeeUseCases,
    validator: Validator<(typeof employeeSchema)['shape']>
  ) {
    this.employeeUseCases = employeeUseCases;
    this.validator = validator;
  }

  getAllEmployees = async () => await this.employeeUseCases.getAllEmployees();

  deleteEmployee = async (id: string) => {
    const employee = await this.employeeUseCases.deleteEmployee(id);
    if (employee) {
      revalidatePath('/employee');
    }

    return employee;
  };

  createEmployee = async (employeeForm: FormData) => {
    const employeeData = Object.fromEntries(employeeForm.entries());

    const { data, error } = await this.validator.validateSchema(employeeData);

    if (error) {
      return { error };
    }

    const employee = await this.employeeUseCases.createEmployee(
      data as unknown as EmployeeForm
    );

    if (employee) {
      revalidatePath('/employee');
    }

    return { data: employee };
  };

  getEmployeeById = async (id: string) =>
    await this.employeeUseCases.getEmployeeById(id);

  updateEmployee = async (id: string, employee: Partial<Employee>) => {
    const employeeUpdated = await this.employeeUseCases.updateEmployee(
      id,
      employee
    );

    if (employeeUpdated) {
      revalidatePath(`'/employee/${id}`);
      revalidatePath('/employee');
    }

    return employeeUpdated;
  };
}

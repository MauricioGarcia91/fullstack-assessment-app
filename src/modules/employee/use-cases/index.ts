import { EmployeeService } from '../domain/service';

import { Employee, EmployeeForm } from '../domain/definitions.d';

export class EmployeeUseCases {
  private employeeApiService: EmployeeService;

  constructor(employeeApiService: EmployeeService) {
    this.employeeApiService = employeeApiService;
  }

  getAllEmployees = async () => await this.employeeApiService.getAllEmployees();

  deleteEmployee = async (id: string) => {
    const employee = await this.employeeApiService.deleteEmployee(id);

    return employee;
  };

  createEmployee = async (employee: EmployeeForm) =>
    await this.employeeApiService.createEmployee(employee);

  getEmployeeById = async (id: string) =>
    await this.employeeApiService.getEmployeeById(id);

  updateEmployee = async (id: string, employee: Partial<Employee>) =>
    await this.employeeApiService.updateEmployee(id, employee);
}

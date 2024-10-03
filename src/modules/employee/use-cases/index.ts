import { EmployeeService } from '../domain/service';
import { EmployeeForm } from '../domain/definitions';

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
}

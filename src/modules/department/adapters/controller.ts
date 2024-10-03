import { DepartmentUseCases } from '../use-cases';

export class DepartmentController {
  private departmentUseCases: DepartmentUseCases;

  constructor(deparmentUseCases: DepartmentUseCases) {
    this.departmentUseCases = deparmentUseCases;
  }

  getAllDepartment = async () =>
    await this.departmentUseCases.getAllDepartment();
}

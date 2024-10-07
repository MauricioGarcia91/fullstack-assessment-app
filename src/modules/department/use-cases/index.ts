import { DepartmentService } from '../domain/service';

export class DepartmentUseCases {
  private departmentApiService: DepartmentService;

  constructor(departmentApiService: DepartmentService) {
    this.departmentApiService = departmentApiService;
  }

  getAllDepartment = async () =>
    await this.departmentApiService.getAllDepartment();
}

import { DepartmentService } from '../domain/service';

export class DepartmentUseCases {
  private departmentApiService: DepartmentService;

  constructor(departmentApiService: DepartmentService) {
    this.departmentApiService = departmentApiService;
  }

  getAllDepartment = async () => {
    const departments = await this.departmentApiService.getAllDepartment();

    return departments;
  };
}

import { Department } from '@/modules/department/domain/definitions.d';
import { Employee } from '@/modules/employee/domain/definitions.d';

export interface EmployeeDepartment {
  id: string;
  employee: Employee;
  department: Department;
  createdAt: string;
}

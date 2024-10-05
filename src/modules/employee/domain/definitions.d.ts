import { EmployeeDepartment } from '@/modules/employee-department/domain/definitions.d';

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  hireDate: string;
  departments: EmployeeDepartment[];
  phone: string;
  address: string;
  createdAt: string;
  isActive: boolean;
}

export interface EmployeeForm {
  firstName: string;
  lastName: string;
  hireDate: string;
  departmentId: string;
  phone: string;
  address: string;
  isActive?: boolean;
}

import { Employee, EmployeeForm } from './definitions.d';

export interface EmployeeService {
  getAllEmployees: () => Promise<Employee[] | null>;
  deleteEmployee: (id: string) => Promise<Employee | null>;
  createEmployee: (employee: EmployeeForm) => Promise<Employee | null>;
  getEmployeeById: (id: string) => Promise<Employee | null>;
  updateEmployee: (
    id: string,
    employee: Partial<Employee>
  ) => Promise<Employee | null>;
}

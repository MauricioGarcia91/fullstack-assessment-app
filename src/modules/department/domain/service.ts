import { Department } from './definitions.d';

export interface DepartmentService {
  getAllDepartment: () => Promise<Department[] | null>;
}

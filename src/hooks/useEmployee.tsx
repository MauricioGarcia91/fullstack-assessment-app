import { updateEmployee } from '@/modules/employee/adapters/actions';
import { Employee } from '@/modules/employee/domain/definitions.d';

export function useEmployee({ employee }: { employee: Employee }) {
  const isActive = employee?.isActive;
  const employeeDepartment = employee?.departments.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return {
    employee,
    isActive,
    employeeDepartment,
    updateEmployee
  };
}

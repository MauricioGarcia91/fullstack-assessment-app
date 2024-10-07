import { EmployeeDetail } from '@/ui/EmployeeDetail/EmployeeDetail';
import { DepartmentSelector } from '@/ui/DepartmentSelector/DepartmentSelector';
import { EmployeeDepartmentChangelog } from '@/ui/EmployeeDepartmentChangelog/EmployeeDepartmentChangelog';

import { getEmployeeById } from '@/modules/employee/adapters/actions';

import styles from './../page.module.css';

export default async function EmployeeDetailPage({
  params
}: {
  params: { id: string };
}) {
  const employee = await getEmployeeById(params.id);

  if (!employee) {
    return <p>Employee not found</p>;
  }

  return (
    <div className={styles.page}>
      <EmployeeDetail employee={employee} />
      <DepartmentSelector
        defaultDepartment={employee.departments[0].department}
      />
      <EmployeeDepartmentChangelog
        employeeDepartmentChangelog={employee.departments}
      />
    </div>
  );
}

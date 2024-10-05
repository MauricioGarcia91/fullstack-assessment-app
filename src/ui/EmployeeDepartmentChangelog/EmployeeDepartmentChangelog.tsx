import { formatDate } from '@/utils/date';

import { EmployeeDepartment } from '@/modules/employee-department/domain/definitions.d';

export function EmployeeDepartmentChangelog({
  employeeDepartmentChangelog
}: {
  employeeDepartmentChangelog: EmployeeDepartment[];
}) {
  return (
    <div>
      <h2>Department History</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {employeeDepartmentChangelog.map((employeeDepartment) => (
            <tr key={employeeDepartment.id}>
              <td>{formatDate(employeeDepartment.createdAt)}</td>
              <td>{employeeDepartment.department.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

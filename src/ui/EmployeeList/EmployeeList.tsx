import { EmployeeCard } from '../EmployeeCard/EmployeeCard';

import { getAllEmployees } from '@/modules/employee/adapters/actions';

import styles from './EmployeeList.module.css';

export async function EmployeeList() {
  const employees = await getAllEmployees();

  if (!employees) {
    return <p>Employees not found</p>;
  }

  return (
    <div className={styles.container}>
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
        />
      ))}
    </div>
  );
}

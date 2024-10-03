import { EmployeeCard } from '../EmployeeCard/EmployeeCard';

import { getAllEmployees } from '@/modules/employee/adapters/actions';

import styles from './EmployeeList.module.css';

export async function EmployeeList() {
  const employees = await getAllEmployees();

  return (
    <div className={styles.container}>
      {!employees && <p>Employees no found</p>}
      {employees?.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
        />
      ))}
    </div>
  );
}

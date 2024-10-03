import { Suspense } from 'react';

import { EmployeeAppBar } from '@/ui/EmployeeAppBar/EmployeeAppBar';
import { EmployeeList } from '@/ui/EmployeeList/EmployeeList';
import { EmployeeForm } from '@/ui/EmployeeForm/EmployeeForm';

import styles from './page.module.css';

export default function EmployeePage({
  searchParams
}: {
  searchParams: {
    new_employee: string;
  };
}) {
  const { new_employee: newEmployee } = searchParams;

  return (
    <div className={styles.page}>
      <EmployeeAppBar />
      <main className={styles.main}>
        <h1>Employees</h1>
        <Suspense fallback={<div>Loading..</div>}>
          <EmployeeList />
        </Suspense>
      </main>
      {!!newEmployee && <EmployeeForm />}
    </div>
  );
}

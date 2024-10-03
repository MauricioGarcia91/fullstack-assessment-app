'use client';
import { useRouter } from '@/hooks/useRouter';
import styles from './EmployeeAppBar.module.css';

export function EmployeeAppBar() {
  const { updateSearchParams } = useRouter();

  const handleNewEmployee = () => {
    updateSearchParams('new_employee', 'true');
  };

  return (
    <header className={styles['app-bar']}>
      <button
        className='button primary'
        onClick={handleNewEmployee}>
        New Employee
      </button>
    </header>
  );
}

import { EmployeeAvatar } from '../EmployeeAvatar/EmployeeAvatar';
import { FieldInfo } from '../FieldInfo';

import { useEmployee } from '@/hooks/useEmployee';
import { formatDate, formatDateDistanceToNow } from '@/utils/date';

import { Employee } from '@/modules/employee/domain/definitions.d';

import styles from './EmployeeDetail.module.css';

export function EmployeeDetail({ employee }: { employee: Employee }) {
  const { isActive, employeeDepartment, updateEmployee } = useEmployee({
    employee
  });

  const handleUpdateEmployeeStatus = async () => {
    'use server';
    await updateEmployee(employee!.id, {
      isActive: !employee!.isActive
    });
  };

  return (
    <div className={styles.detail}>
      <div className={styles['detail-avatar-container']}>
        <EmployeeAvatar
          firstName={employee.firstName}
          lastName={employee.lastName}
        />
        <div
          className={
            isActive ? styles['chip-active'] : styles['chip-inactive']
          }>
          {isActive ? 'ACTIVE' : 'INACTIVE'}
        </div>
      </div>
      <div className={styles['detail-info']}>
        <FieldInfo primaryText={`${employee.firstName} ${employee.lastName}`} />
        <FieldInfo
          primaryText={`Department: `}
          secondaryText={`${employeeDepartment![0].department.name}`}
        />
        <FieldInfo
          primaryText={`Hire Date: `}
          secondaryText={`
          ${formatDate(employee.hireDate)} 
          (${formatDateDistanceToNow(employee.hireDate)})`}
        />
        <FieldInfo
          primaryText={`Phone: `}
          secondaryText={`${employee.phone}`}
        />
        <FieldInfo
          primaryText={`Address: `}
          secondaryText={`${employee.address}`}
        />
      </div>
      <form action={handleUpdateEmployeeStatus}>
        <button
          className={`button ${
            employee.isActive ? `${styles.inactive}` : `green`
          }`}>
          {employee.isActive ? 'DEACTIVATE' : 'ACTIVATE'}
        </button>
      </form>
    </div>
  );
}

'use client';

import Link from 'next/link';

import { EmployeeAvatar } from '../EmployeeAvatar/EmployeeAvatar';
import { FieldInfo } from '../FieldInfo';

import { deleteEmployee } from '@/modules/employee/adapters/actions';
import { formatDate, formatDateDistanceToNow } from '@/utils/date';

import { Employee } from '@/modules/employee/domain/definitions.d';

import styles from './EmployeeCard.module.css';

export function EmployeeCard({ employee }: { employee: Employee }) {
  const onClickDeleteHandler = async (id: string) => {
    const employee = await deleteEmployee(id);
    if (!employee) {
      alert('Employee no deleted');
    } else {
      alert('Employee deleted');
    }
  };

  return (
    <div className={styles.card}>
      <EmployeeAvatar
        firstName={employee.firstName}
        lastName={employee.lastName}
      />
      <div className={styles['card-info']}>
        <FieldInfo
          primaryText={`${employee.firstName} ${employee.lastName}`}
          secondaryText={` - ${employee.department?.name ?? 'N|A'}`}
        />
        <FieldInfo primaryText={'Hire Date'} />
        <FieldInfo
          secondaryText={`${formatDate(
            employee.hireDate
          )} (${formatDateDistanceToNow(employee.hireDate)})`}
        />
      </div>
      <div className={styles['card-actions']}>
        <Link
          href={`/employee/${employee.id}`}
          className='button primary'>
          View Details
        </Link>
        <button
          className='button delete'
          onClick={() => onClickDeleteHandler(employee.id)}>
          X
        </button>
      </div>
    </div>
  );
}

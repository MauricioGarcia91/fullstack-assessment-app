'use client';

import Image from 'next/image';
import Link from 'next/link';

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
      <Image
        src={`https://ui-avatars.com/api/?name=${employee.firstName}+${employee.lastName}&background=0070f3&color=ffffff&size=128&rounded=true&bold=true`}
        alt='Profile image'
        width='64'
        height='64'
        className={styles.avatar}
      />
      <div className={styles['card-info']}>
        <p>
          <strong>{`${employee.firstName} ${employee.lastName}`}</strong>
          {' - '}({employee.department?.name ?? 'N|A'})
        </p>
        <p>
          <b>Hire Date</b>
        </p>
        <p>
          {formatDate(employee.hireDate)}{' '}
          {`(${formatDateDistanceToNow(employee.hireDate)})`}
        </p>
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

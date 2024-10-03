import {
  getEmployeeById,
  updateEmployee
} from '@/modules/employee/adapters/actions';

import { EmployeeAvatar } from '../EmployeeAvatar/EmployeeAvatar';
import { FieldInfo } from '../FieldInfo';

import { formatDate, formatDateDistanceToNow } from '@/utils/date';

import styles from './EmployeeDetail.module.css';
import { DepartmentSelector } from '../DepartmentSelector/DepartmentSelector';

export async function EmployeeDetail({ id }: { id: string }) {
  const employee = await getEmployeeById(id);

  if (!employee) {
    return <p>Employee not found</p>;
  }

  const handleUpdateEmployeeStatus = async () => {
    'use server';
    await updateEmployee(employee.id, {
      isActive: !employee.isActive
    });
  };

  const isActive = employee.isActive;

  return (
    <div className={styles.container}>
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
          <FieldInfo
            primaryText={`${employee.firstName} ${employee.lastName}`}
          />
          <FieldInfo
            primaryText={`Department: `}
            secondaryText={`${employee.department.name}`}
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
            {employee.isActive ? 'DESACTIVATE' : 'ACTIVATE'}
          </button>
        </form>
      </div>
      <DepartmentSelector defaultValue={employee.department} />
    </div>
  );
}

'use client';

import { useDepartmentSelector } from '@/hooks/useDepartmentSelector';

import { Department } from '@/modules/department/domain/definitions.d';

import styles from './DepartmentSelector.module.css';

export function DepartmentSelector({
  defaultDepartment
}: {
  defaultDepartment: Department;
}) {
  const {
    departmentSelected,
    departments,
    updatingDisabled,
    onChangeDepartment,
    handleUpdateDepartmentOnClick
  } = useDepartmentSelector({
    defaultDepartment
  });

  return (
    <div className={styles.container}>
      <select
        className={styles.select}
        name='departmentId'
        value={departmentSelected}
        onChange={onChangeDepartment}>
        {departments?.map((department) => (
          <option
            key={department.id}
            value={department.id}>
            {department.name}
          </option>
        ))}
      </select>
      <button
        className={`button green ${updatingDisabled ? 'not-allowed' : ''}`}
        disabled={updatingDisabled}
        onClick={handleUpdateDepartmentOnClick}>
        Update
      </button>
    </div>
  );
}

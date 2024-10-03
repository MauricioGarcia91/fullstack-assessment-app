'use client';
import { useState } from 'react';

import { useRouter } from '@/hooks/useRouter';
import { useDepartment } from '@/hooks/useDepartment';
import { updateEmployee } from '@/modules/employee/adapters/actions';

import { Department } from '@/modules/department/domain/definitions.d';

import styles from './DepartmentSelector.module.css';

export function DepartmentSelector({
  defaultValue
}: {
  defaultValue: Department;
}) {
  const [departmentSelected, setDepartmentSelected] = useState(defaultValue.id);
  const { departments } = useDepartment();
  const { id } = useRouter();

  const onChangeDepartment = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    setDepartmentSelected(evt.target.value);
  };

  const handleUpdateDepartmentOnClick = async () => {
    const employee = await updateEmployee(id as string, {
      departmentId: departmentSelected
    });

    if (!employee) {
      alert('Employee not updated');
    } else {
      alert('Employee updated!');
    }
  };

  const updatingDisabled = defaultValue.id === departmentSelected;

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

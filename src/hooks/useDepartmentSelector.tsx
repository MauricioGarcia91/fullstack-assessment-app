'use client';
import { useState } from 'react';

import { useDepartment } from './useDepartment';
import { useRouter } from './useRouter';

import { updateEmployee } from '@/modules/employee/adapters/actions';

import { Department } from '@/modules/department/domain/definitions.d';
export function useDepartmentSelector({
  defaultDepartment
}: {
  defaultDepartment: Department;
}) {
  const [departmentSelected, setDepartmentSelected] = useState(
    defaultDepartment.id
  );
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

  const updatingDisabled = defaultDepartment.id === departmentSelected;

  return {
    departmentSelected,
    departments,
    updatingDisabled,
    onChangeDepartment,
    handleUpdateDepartmentOnClick
  };
}

'use client';
import { useEffect, useState } from 'react';

import { getAllDepartment } from '@/modules/department/adapters/actions';
import { createEmployee } from '@/modules/employee/adapters/actions';

import { useRouter } from '@/hooks/useRouter';

import { Department } from '@/modules/department/domain/definitions.d';

export function useEmployeeForm() {
  const [departments, setDepartments] = useState<Department[]>([]);
  const { updateSearchParams } = useRouter();

  const fetchDepartments = async () => {
    const departments = await getAllDepartment();

    if (!departments) return;

    setDepartments(departments);
  };

  const handleOnClose = () => {
    updateSearchParams('new_employee', '');
  };

  const handleOnSubmit = async (formData: FormData) => {
    const { data, error } = await createEmployee(formData);
    if (error) {
      alert(JSON.stringify(error));
      return;
    }

    if (data) {
      alert('Employee created!');
      handleOnClose();
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  return {
    departments,
    handleOnClose,
    handleOnSubmit
  };
}

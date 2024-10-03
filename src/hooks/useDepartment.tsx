'use client';

import { useEffect, useState } from 'react';

import { getAllDepartment } from '@/modules/department/adapters/actions';

import { Department } from '@/modules/department/domain/definitions.d';

export function useDepartment() {
  const [departments, setDepartments] = useState<Department[]>([]);

  const fetchDepartments = async () => {
    const departments = await getAllDepartment();

    if (!departments) return;

    setDepartments(departments);
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  return { departments };
}

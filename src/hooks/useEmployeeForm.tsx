'use client';

import { createEmployee } from '@/modules/employee/adapters/actions';

import { useRouter } from '@/hooks/useRouter';

export function useEmployeeForm() {
  const { updateSearchParams } = useRouter();

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

  return {
    handleOnClose,
    handleOnSubmit
  };
}

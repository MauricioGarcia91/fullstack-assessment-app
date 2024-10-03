'use client';

import { useEmployeeForm } from '@/hooks/useEmployeeForm';
import { useDepartment } from '@/hooks/useDepartment';

import styles from './EmployeeForm.module.css';

export function EmployeeForm() {
  const { handleOnClose, handleOnSubmit } = useEmployeeForm();
  const { departments } = useDepartment();

  return (
    <div>
      <div
        className={styles.backdrop}
        onClick={handleOnClose}
      />
      <dialog
        className={styles.modal}
        open>
        <h1>Create Employee</h1>
        <form
          lang='en'
          className={styles.form}
          action={handleOnSubmit}>
          <label htmlFor='firstName'>Firs Name:</label>
          <input
            type='text'
            name='firstName'
            id='firstName'
            required
          />
          <label htmlFor='lastName'>Last Name:</label>
          <input
            type='text'
            name='lastName'
            id='lastName'
            required
          />
          <label htmlFor='hireDate'>Hire Date:</label>
          <input
            type='date'
            name='hireDate'
            id='hireDate'
            required
          />
          <label htmlFor='departmentId'>Choose a department:</label>
          <select
            id='departmentId'
            name='departmentId'
            defaultValue={''}
            required>
            <option
              value={''}
              disabled>
              Select a department
            </option>
            {departments?.map((department) => (
              <option
                key={department.id}
                value={department.id}>
                {department.name}
              </option>
            ))}
          </select>
          <label htmlFor='phone'>Phone:</label>
          <input
            type='text'
            name='phone'
            id='phone'
            required
          />
          <label htmlFor='address'>Address:</label>
          <input
            type='text'
            name='address'
            id='address'
            required
          />
          <div className={styles.actions}>
            <button
              type='submit'
              className='button primary'>
              Save
            </button>
            <button
              className=' button secondary'
              onClick={handleOnClose}>
              Close
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
}

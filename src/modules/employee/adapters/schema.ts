import { z } from 'zod';

export const employeeSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required.' }),
  lastName: z.string().min(1, { message: 'Last name is required.' }),
  hireDate: z.string().min(1, { message: 'Hire date is required.' }),
  departmentId: z.string().uuid({ message: 'Invalid department ID.' }),
  phone: z.string().min(1, { message: 'Phone number is required.' }),
  address: z.string().min(1, { message: 'Address is required.' })
});

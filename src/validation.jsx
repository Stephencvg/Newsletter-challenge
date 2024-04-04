import { object, string } from 'yup';

export const userSchema = object({
  email: string()
    .email('Please enter valid email')
    .required('Valid email required'),
});

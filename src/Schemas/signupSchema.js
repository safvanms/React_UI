import * as Yup from 'yup';


export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(4, 'Name must be at least 4 characters')
    .max(20, 'Name must not exceed 20 characters'),
    email: Yup.string()
    .required('Email is required')
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      'Enter a valid email address'
    ),
  password: Yup.string()
    .required('Password is required')
    .matches(
      /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).*$/,
      'Password must contain at least one uppercase letter, one symbol, and one number'
    ),
});

 

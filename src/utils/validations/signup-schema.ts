import { object, string } from 'yup'

export const signUpSchema = object().shape({
  email: string()
    .email('Please enter a valid email address')
    .required('Please enter your email address')
})

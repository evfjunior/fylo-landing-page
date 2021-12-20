import { Formik, FormikHelpers } from 'formik'

import { Button } from 'components/Button'

import { onSubmitMessage } from 'utils/others'
import { signUpSchema } from 'utils/validations/signup-schema'

import * as S from './styles'

type Values = {
  email: ''
}

export type SignUpFormProps = {
  buttonLabel: string
  inputLabel: string
  onSubmit?: (values: Values) => void
}

export function SignUpForm({
  buttonLabel,
  inputLabel,
  onSubmit
}: SignUpFormProps) {
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

  const handleSubmit = async (
    values: Values,
    { setSubmitting, resetForm }: FormikHelpers<Values>
  ) => {
    await sleep(500)
    console.log(`${onSubmitMessage}${JSON.stringify(values, null, 2)}`)
    setSubmitting(false)
    resetForm()
    onSubmit!(values)
  }

  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={signUpSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, isValid, isSubmitting }) => (
        <S.FormElement name="signup-form" method="post">
          <S.InputWrapper>
            <S.Label htmlFor="email">{inputLabel}</S.Label>
            <S.Input id="email" name="email" type="email" />
            {errors.email && <S.ErrorMessage>{errors.email}</S.ErrorMessage>}
          </S.InputWrapper>
          <Button type="submit" disabled={!isValid || isSubmitting}>
            {buttonLabel}
          </Button>
        </S.FormElement>
      )}
    </Formik>
  )
}

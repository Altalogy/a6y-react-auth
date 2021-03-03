import React from 'react'
import EmailPasswordForm from '../EmailPasswordForm'
import FormLinks from '../FormLinks'
import { ErrorBoundary } from '../UI'
import './SignUp.css'

export interface Props {
  className?: string
  onClick?: () => void
  apiError?: string
}

const SignUp = ({
  className = 'a6y-react-auth-sign-up-cmp',
  apiError,
}: Props): JSX.Element => {
  return (
    <div className={className}>
      <ErrorBoundary showError={apiError ? true : false}>
        {apiError}
      </ErrorBoundary>
      <EmailPasswordForm />
      <FormLinks />
    </div>
  )
}

export default SignUp

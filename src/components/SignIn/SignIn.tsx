import React from 'react'
import EmailPasswordForm from '../EmailPasswordForm'
import FormLinks from '../FormLinks'
import { ErrorBoundary } from '../UI'
import './SignIn.css'

export interface Props {
  className?: string
  onClick?: () => void
  apiError?: string
}

const SignIn = ({
  className = 'a6y-react-auth-sign-in-cmp',
  onClick,
  apiError,
}: Props): JSX.Element => {
  return (
    <div className={className}>
      <ErrorBoundary showError={apiError ? true : false}>
        {apiError}
      </ErrorBoundary>
      <EmailPasswordForm onClick={onClick} />
      <FormLinks />
    </div>
  )
}

export default SignIn

import React from 'react'
import EmailPasswordForm from '../EmailPasswordForm'
import FormLinks from '../FormLinks'
import './SignUp.css'

export interface Props {
  className?: string
  onClick?: () => void
  apiError?: unknown
}

const SignUp = ({
  className = 'a6y-react-auth-sign-up-cmp',
}: Props): JSX.Element => {
  return (
    <div className={className}>
      <EmailPasswordForm />
      <FormLinks />
    </div>
  )
}

export default SignUp

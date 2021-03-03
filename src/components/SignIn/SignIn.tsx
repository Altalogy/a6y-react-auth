import React from 'react'
import EmailPasswordForm from '../EmailPasswordForm'
import FormLinks from '../FormLinks'
import './SignIn.css'

export interface Props {
  className?: string
  onClick?: () => void
  apiError?: unknown
}

const SignIn = ({
  className = 'a6y-react-auth-sign-in-cmp',
  onClick,
}: Props): JSX.Element => {
  return (
    <div className={className}>
      <EmailPasswordForm onClick={onClick} />
      <FormLinks />
    </div>
  )
}

export default SignIn

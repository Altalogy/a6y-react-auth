import React from 'react'
import EmailPasswordForm from '../EmailPasswordForm'
import FormLinks from '../FormLinks'

export interface Props {
  className?: string
  onClick?: () => void
  apiError?: unknown
}

const SignIn = ({ className, onClick }: Props): JSX.Element => {
  return (
    <div className={className ? className : 'a6y-react-auth-sign-in-cmp'}>
      <EmailPasswordForm onClick={onClick} />
      <FormLinks />
    </div>
  )
}

export default SignIn

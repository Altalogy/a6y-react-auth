import React from 'react'
import EmailPasswordForm from '../EmailPasswordForm'
import FormLinks from '../FormLinks'

export interface Props {
  className?: string
  onClick?: () => void
}

const SignIn = ({ className }: Props): JSX.Element => {
  return (
    <div className={className ? className : 'a6y-react-auth-sign-in'}>
      <EmailPasswordForm />
      <FormLinks />
    </div>
  )
}

export default SignIn

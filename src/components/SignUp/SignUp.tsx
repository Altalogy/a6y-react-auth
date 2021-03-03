import React from 'react'
import EmailPasswordForm from '../EmailPasswordForm'
import FormLinks from '../FormLinks'
import './SignUp.css'

/**
 * @typedef ISignUpProps
 * @props {string} [className]
 * @props {() => void} [onClick]
 * @props {unknown} [apiError]
 */

export interface ISignUpProps {
  className?: string
  onClick?: () => void
  apiError?: unknown
}

const SignUp = ({
  className = 'a6y-react-auth-sign-up-cmp',
  onClick,
}: ISignUpProps): JSX.Element => {
  return (
    <div className={className}>
      <EmailPasswordForm onClick={onClick} submitLabel='Sign Up' />
      <FormLinks />
    </div>
  )
}

export default SignUp

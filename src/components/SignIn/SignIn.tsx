import React from 'react'
import EmailPasswordForm from '../EmailPasswordForm'
import FormLinks from '../FormLinks'
import './SignIn.css'

/**
 * @typedef ISignInProps
 * @props {string} [className]
 * @props {() => void} [onClick]
 * @props {unknown} [apiError]
 */

export interface ISignInProps {
  className?: string
  onClick?: () => void
  apiError?: unknown
}

const SignIn = ({
  className = 'a6y-react-auth-sign-in-cmp',
  onClick,
}: ISignInProps): JSX.Element => {
  return (
    <div className={className}>
      <EmailPasswordForm onClick={onClick} submitLabel='Sign In' />
      <FormLinks />
    </div>
  )
}

export default SignIn

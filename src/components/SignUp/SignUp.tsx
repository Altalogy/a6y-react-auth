import React from 'react'
import EmailPasswordForm from '../EmailPasswordForm'
import FormLinks from '../FormLinks'
import './SignUp.css'

/**
 * @typedef ISignUpProps
 * @props {string} [className] - the CSS classes
 * @props {() => void} [onClick] - onClick handler launching after submit form
 * @props {unknown} [apiError] - api error messages
 */

export interface ISignUpProps {
  className?: string
  onClick?: () => void
  apiError?: unknown
}

/**
 * Renders the sign-up component
 *
 * @param  {string} [classname] - the CSS classes
 * @param  {() => void} [onClick] - onClick handler launching after submit form
 * @param  {unknown} [apiError] - api error messages
 *
 * @example
 * <SignUp
 *  className='a6y-react-auth-sign-up-cmp'
 *  onClick={onClick}
 * />
 */

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

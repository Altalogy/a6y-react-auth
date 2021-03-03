import React from 'react'
import EmailPasswordForm from '../EmailPasswordForm'
import FormLinks from '../FormLinks'
import './SignIn.css'

/**
 * @typedef ISignInProps
 * @props {string} [className] - the CSS classes
 * @props {() => void} [onClick] - onClick handler launching after submit form
 * @props {string} [apiError] - api error messages
 */

export interface ISignInProps {
  className?: string
  onClick?: () => void
  apiError?: string
}

/**
 * Renders the sign-in component
 *
 * @param  {string} [classname] - the CSS classes
 * @param  {() => void} [onClick] - onClick handler launching after submit form
 * @param  {string} [apiError] - api error messages
 *
 * @example
 * <SignIn
 *  className='a6y-react-auth-sign-in-cmp'
 *  onClick={onClick}
 * />
 */

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

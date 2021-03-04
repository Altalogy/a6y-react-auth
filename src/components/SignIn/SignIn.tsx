import React from 'react'
import EmailPasswordForm from '../EmailPasswordForm'
import FormLinks from '../FormLinks'
import { ErrorBoundary } from '../UI'
import '../../index.css'

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
 * @param  {string} [className] - the CSS classes
 * @param  {() => void} [onClick] - onClick handler launching after submit form
 * @param  {string} [apiError] - api error messages
 *
 * @example
 * <SignIn
 *  className='a6y-react-auth__sign-in'
 *  onClick={onClick}
 * />
 */

const SignIn = ({
  className = 'a6y-react-auth__sign-in',
  onClick,
  apiError,
}: ISignInProps): JSX.Element => {
  return (
    <div className={className}>
      <ErrorBoundary showError={apiError ? true : false}>
        {apiError}
      </ErrorBoundary>
      <EmailPasswordForm submitLabel='sign in' onClick={onClick} />
      <FormLinks path='sign-in' />
    </div>
  )
}

export default SignIn

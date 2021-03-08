import React from 'react'
import EmailPasswordForm from '../EmailPasswordForm'
import FormLinks from '../FormLinks'
import { ErrorBoundary } from '../UI'
import '../../index.css'

/**
 * @typedef ISignInProps
 * @props {string} [className] - the CSS classes
 * @props {(email: string, password: string) => void} [onClick] - onClick handler launching after submit form
 * @props {string} [apiError] - api error messages
 * @props  {(to: string) => void} [onLinkHandler] - links onClick handler
 */

export interface ISignInProps {
  className?: string
  onClick?: (email: string, password: string) => void
  apiError?: string
  onLinkHandler?: (to: string) => void
}

/**
 * Renders the sign-in component
 *
 * @param  {string} [className] - the CSS classes
 * @param  {(email: string, password: string) => void} [onClick] - onClick handler launching after submit form
 * @param  {string} [apiError] - api error messages
 * @param  {(to: string) => void} [onLinkHandler] - links onClick handler
 *
 * @example
 * <SignIn
 *  className='a6y-react-auth__sign-in'
 *  onClick={onClick}
 *  onLinkHandler={onLinkHandler}
 * />
 */

const SignIn = ({
  className = 'a6y-react-auth__sign-in',
  onClick,
  apiError,
  onLinkHandler = undefined,
}: ISignInProps): JSX.Element => {
  return (
    <div className={className}>
      <ErrorBoundary showError={apiError ? true : false}>
        {apiError}
      </ErrorBoundary>
      <EmailPasswordForm submitLabel='sign in' onClick={onClick} />
      <FormLinks onLinkHandler={onLinkHandler} path='sign-in' />
    </div>
  )
}

export default SignIn

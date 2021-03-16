/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import EmailPasswordForm from '../EmailPasswordForm'
import FormLinks from '../FormLinks'
import { ErrorBoundary } from '../UI'
import '../../index.css'
import SocialLogin from '../SocialLogin'

/**
 * @typedef ISignInProps
 * @props {string} [className] - the CSS classes
 * @props {(email: string, password: string) => void} [onClick] - onClick handler launching after submit form
 * @props  {(response: any) => void} [onSocialClick] - onClick handler launching after submit on social providers
 * @props {string} [apiError] - api error messages
 * @props  {(to: string) => void} [onLinkHandler] - links onClick handler
 */

export interface ISignInProps {
  className?: string
  onClick?: (email: string, password: string) => void
  onSocialClick?: (response: any) => void
  apiError?: string
  onLinkHandler?: (to: string) => void
}

/**
 * Renders the sign-in component
 *
 * @param  {string} [className] - the CSS classes
 * @param  {(email: string, password: string) => void} [onClick] - onClick handler launching after submit form
 * @param  {(response: any) => void} [onSocialClick] - onClick handler launching after submit on social providers
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
  onSocialClick,
  apiError,
  onLinkHandler = undefined,
}: ISignInProps): JSX.Element => {
  return (
    <div className={className}>
      <h1>
        {globalThis.A6YReactAuthConfig &&
        globalThis.A6YReactAuthConfig.components?.signIn?.title
          ? globalThis.A6YReactAuthConfig.components?.signIn?.title
          : 'Sign In'}
      </h1>
      <ErrorBoundary showError={apiError ? true : false}>
        {apiError}
      </ErrorBoundary>
      {onSocialClick && <SocialLogin callback={onSocialClick} />}
      <EmailPasswordForm submitLabel='sign in' onClick={onClick} />
      <FormLinks onLinkHandler={onLinkHandler} path='sign-in' />
    </div>
  )
}

export default SignIn

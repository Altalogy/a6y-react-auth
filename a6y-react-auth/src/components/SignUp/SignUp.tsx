/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import EmailPasswordForm from '../EmailPasswordForm'
import FormLinks from '../FormLinks'
import { ErrorBoundary } from '../UI'
import '../../index.css'
import SocialLogin from '../SocialLogin'
import Consents from '../Consents'

/**
 * @typedef ISignUpProps
 * @props {string} [className] - the CSS classes
 * @props {(email: string, password: string) => void} [onClick] - onClick handler launching after submit form
 * @props {(response: any) => void} [onSocialClick] - onClick handler launching after submit on social providers
 * @props {string} [apiError] - api error messages
 * @props {(to: string) => void} [onLinkHandler] - links onClick handler
 */

export interface ISignUpProps {
  className?: string
  onClick?: (email: string, password: string) => void
  onSocialClick?: (response: any) => void
  apiError?: string
  onLinkHandler?: (to: string) => void
}

/**
 * Renders the sign-up component
 *
 * @param  {string} [className] - the CSS classes
 * @param  {(email: string, password: string) => void} [onClick] - onClick handler launching after submit form
 * @param  {(response: any) => void} [onSocialClick] - onClick handler launching after submit on social providers
 * @param  {string} [apiError] - api error messages
 * @param  {(to: string) => void} [onLinkHandler] - links onClick handler
 *
 * @example
 * <SignUp
 *  className='a6y-react-auth__sign-up'
 *  onClick={onClick}
 *  onLinkHandler={onLinkHandler}
 * />
 */

const SignUp = ({
  className = 'a6y-react-auth__sign-up',
  onClick,
  onSocialClick,
  apiError,
  onLinkHandler = undefined,
}: ISignUpProps): JSX.Element => {
  const [conditions, setConditions] = useState(false)
  const [conditionsError, setConditionsError] = useState(false)
  const onSubmit = (email: string, password: string) => {
    setConditionsError(!conditions)
    if (onClick && conditions) {
      onClick(email, password)
    }
  }
  return (
    <div className={className}>
      <h1>
        {globalThis.A6YReactAuthConfig &&
        globalThis.A6YReactAuthConfig.components?.signUp?.title
          ? globalThis.A6YReactAuthConfig.components?.signUp?.title
          : 'Sign Up'}
      </h1>
      <ErrorBoundary showError={apiError ? true : false}>
        {apiError}
      </ErrorBoundary>
      <ErrorBoundary showError={conditionsError ? true : false}>
        All required consents must be accepted.
      </ErrorBoundary>
      {onSocialClick && <SocialLogin callback={onSocialClick} />}
      <EmailPasswordForm
        signUp={true}
        submitLabel='sign up'
        onClick={onSubmit}
      />
      <Consents isValid={(value: boolean) => setConditions(value)} />
      <FormLinks onLinkHandler={onLinkHandler} path='sign-up' />
    </div>
  )
}

export default SignUp

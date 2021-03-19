import React, { useState } from 'react'
import EmailPasswordForm from '../EmailPasswordForm'
import FormLinks from '../FormLinks'
import { ErrorBoundary } from '../UI'
import '../../index.css'
import Consents from '../Consents'

/**
 * @typedef ISignUpProps
 * @props {string} [className] - the CSS classes
 * @props {(email: string, password: string) => void} [onClick] - onClick handler launching after submit form
 * @props {string} [apiError] - api error messages
 * @props {(to: string) => void} [onLinkHandler] - links onClick handler
 */

export interface ISignUpProps {
  className?: string
  onClick?: (email: string, password: string) => void
  apiError?: string
  onLinkHandler?: (to: string) => void
}

/**
 * Renders the sign-up component
 *
 * @param  {string} [className] - the CSS classes
 * @param  {(email: string, password: string) => void} [onClick] - onClick handler launching after submit form
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
      <EmailPasswordForm submitLabel='sign up' onClick={onSubmit} />
      <Consents isValid={(value: boolean) => setConditions(value)} />
      <FormLinks onLinkHandler={onLinkHandler} path='sign-up' />
    </div>
  )
}

export default SignUp

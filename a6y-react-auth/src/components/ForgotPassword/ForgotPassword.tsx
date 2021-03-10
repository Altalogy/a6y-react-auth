import React, { useState } from 'react'
import FormLinks from '../FormLinks'
import { ErrorBoundary, Input, Button } from '../UI'
import '../../index.css'

/**
 * @typedef IForgotPasswordProps
 * @props {string} [className] - the CSS classes
 * @props {(email: string) => void} [onClick] - onClick handler launching after submit form
 * @props {string} [apiError] - api error messages
 * @props  {(to: string) => void} [onLinkHandler] - links onClick handler
 */

export interface IForgotPasswordProps {
  className?: string
  onClick?: (email: string) => void
  apiError?: string
  onLinkHandler?: (to: string) => void
}

/**
 * Renders the sign-in component
 *
 * @param  {string} [className] - the CSS classes
 * @param  {(email: string) => void} [onClick] - onClick handler launching after submit form
 * @param  {string} [apiError] - api error messages
 * @param  {(to: string) => void} [onLinkHandler] - links onClick handler
 *
 * @example
 * <ForgotPassword
 *  className='a6y-react-auth__forgot-password'
 *  onClick={onClick}
 * />
 */

const ForgotPassword = ({
  className = 'a6y-react-auth__forgot-password',
  onClick,
  apiError,
  onLinkHandler,
}: IForgotPasswordProps): JSX.Element => {
  const [forgotPasswordData, setForgotPasswordData] = useState({
    email: '',
  })
  const onSubmit = () => {
    if (onClick) onClick(forgotPasswordData.email)
  }
  return (
    <div className={className}>
      <ErrorBoundary showError={apiError ? true : false}>
        {apiError}
      </ErrorBoundary>
      <form className={`${className}__form`} onSubmit={onSubmit}>
        <div className={`${className}-group`}>
          <Input
            id='email'
            placeholder='Email'
            typeInput='email'
            label=''
            onChange={(e: { target: { value: string } }) =>
              setForgotPasswordData({
                ...forgotPasswordData,
                email: e.target.value,
              })
            }
            value={forgotPasswordData.email}
          />
        </div>
        <Button role='submit' style='primary'>
          Reset password
        </Button>
      </form>
      <FormLinks onLinkHandler={onLinkHandler} />
    </div>
  )
}

export default ForgotPassword

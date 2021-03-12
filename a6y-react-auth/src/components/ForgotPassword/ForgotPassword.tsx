import React, { useState } from 'react'
import FormLinks from '../FormLinks'
import { ErrorBoundary, Input, Button } from '../UI'
import validate from '../../utilities/validation'
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
  const [errorData, setErrorData] = useState({
    email: false,
  })
  const classNames = require('classnames')

  const FormClass = classNames({
    [`${className}--error`]: errorData.email ? true : false,
  })
  const onInputChange = (e: { target: { value: string } }, target: string) => {
    setErrorData({ ...errorData, [target]: e.target.value.length !== 0 })
    setForgotPasswordData({
      ...forgotPasswordData,
      [target]: e.target.value,
    })
  }
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()
    const data = [
      {
        value: forgotPasswordData.email,
        rules: ['CANNOT_BE_BLANK'],
      },
    ]
    if (onClick && validate(data)) {
      onClick(forgotPasswordData.email)
    } else {
      if (!errorData.email) setErrorData({ email: true })
    }
  }
  return (
    <div className={className}>
      <ErrorBoundary showError={apiError ? true : false}>
        {apiError}
      </ErrorBoundary>
      <form className={`${className}__form`} onSubmit={onSubmit}>
        <div className={`${className}-group ${FormClass}`}>
          <Input
            id='email'
            placeholder='Email'
            typeInput='email'
            label=''
            onChange={e => onInputChange(e, 'email')}
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

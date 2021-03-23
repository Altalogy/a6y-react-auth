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
 * @props {(to: string) => void} [onLinkHandler] - links onClick handler
 * @props {string} [inputStyles] - input CSS classes for input
 * @props {string} [buttonStyles] - btn CSS classes for button
 * @props {string} [labelStyles] - label CSS classes for label
 * @props {string} [linkStyles] - the CSS classes for link
 * @props {string} [formStyles] - form CSS classes
 * @props {string} [formGroupStyles] - form group CSS classes
 */

export interface IForgotPasswordProps {
  className?: string
  onClick?: (email: string) => void
  apiError?: string
  onLinkHandler?: (to: string) => void
  inputStyles?: string
  buttonStyles?: string
  labelStyles?: string
  linkStyles?: string
  formStyles?: string
  formGroupStyles?: string
}

/**
 * Renders the sign-in component
 *
 * @param  {string} [className] - the CSS classes
 * @param  {(email: string) => void} [onClick] - onClick handler launching after submit form
 * @param  {string} [apiError] - api error messages
 * @param  {(to: string) => void} [onLinkHandler] - links onClick handler
 * @param  {string} [inputStyles] - input CSS classes for input
 * @param  {string} [buttonStyles] - btn CSS classes for button
 * @param  {string} [labelStyles] - the CSS classes for label
 * @param  {string} [linkStyles] - the CSS classes for link
 * @param  {string} [formStyles] - form CSS classes
 * @param  {string} [formGroupStyles] - form group CSS classes
 *
 * @example
 * <ForgotPassword
 *  className='a6y-react-auth__forgot-password'
 *  onClick={onClick}
 * />
 */

const ForgotPassword = ({
  className = 'a6y-react-auth',
  onClick,
  apiError,
  onLinkHandler,
  inputStyles = '',
  buttonStyles = '',
  labelStyles = '',
  linkStyles = '',
  formStyles = '',
  formGroupStyles = '',
}: IForgotPasswordProps): JSX.Element => {
  const [forgotPasswordData, setForgotPasswordData] = useState({
    email: '',
  })
  const [errorData, setErrorData] = useState({
    email: false,
  })
  const classNames = require('classnames')

  const FormClass = classNames({
    [`${className + '__form'}--error`]: errorData.email ? true : false,
  })
  const onInputChange = (e: { target: { value: string } }, target: string) => {
    setErrorData({ ...errorData, [target]: e.target.value.length === 0 })
    setForgotPasswordData({
      ...forgotPasswordData,
      [target]: e.target.value,
    })
  }
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.stopPropagation()
    e.preventDefault()
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
    <div className={className + '__forgot-password'}>
      <h1>
        {globalThis.A6YReactAuthConfig &&
        globalThis.A6YReactAuthConfig.components?.forgotPassword?.title
          ? globalThis.A6YReactAuthConfig.components?.forgotPassword?.title
          : 'Forgot Password'}
      </h1>
      <ErrorBoundary showError={apiError ? true : false}>
        {apiError}
      </ErrorBoundary>
      <form
        className={
          formStyles && formStyles.length > 0
            ? formStyles
            : `${className}__form`
        }
        onSubmit={e => onSubmit(e)}
      >
        <div
          className={
            formGroupStyles && formGroupStyles.length > 0
              ? `${formGroupStyles} `
              : `${className}-group ${FormClass}`
          }
        >
          <Input
            id='email'
            placeholder='Email'
            typeInput='email'
            label=''
            onChange={e => onInputChange(e, 'email')}
            value={forgotPasswordData.email}
            inputStyles={inputStyles}
            labelStyles={labelStyles}
          />
        </div>
        <Button className={buttonStyles} role='submit' style='primary'>
          Reset password
        </Button>
      </form>
      <FormLinks className={linkStyles} onLinkHandler={onLinkHandler} />
    </div>
  )
}

export default ForgotPassword

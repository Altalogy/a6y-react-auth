import React, { useState } from 'react'
import { ErrorBoundary, Input, Button } from '../UI'
import validate from '../../utilities/validation'
import '../../index.css'
import { Loader } from '../UI/Loader'

/**
 * @typedef IForgotPasswordProps
 * @props {string} [className] - the CSS classes
 * @props {(code: string, password: string) => void} [onClick] - onClick handler launching after submit form
 * @props {string} [apiError] - api error messages
 * @props {string} [inputStyles] - input CSS classes
 * @props {string} [buttonStyles] - btn CSS classes
 * @props {string} [labelStyles] - label CSS classes
 * @props {string} [formStyles] - form CSS classes
 * @props {string} [formGroupStyles] - form group CSS classes
 */

export interface IForgotPasswordProps {
  className?: string
  loader: boolean
  onClick?: (code: string, password: string) => void
  apiError?: string
  inputStyles?: string
  buttonStyles?: string
  labelStyles?: string
  formStyles?: string
  formGroupStyles?: string
}

/**
 * Renders the forgot password submit component
 *
 * @param  {string} [className] - the CSS classes
 * @param  {(code: string, password: string) => void} [onClick] - onClick handler launching after submit form
 * @param  {string} [apiError] - api error messages
 * @param  {string} [inputStyles] - input CSS classes
 * @param  {string} [buttonStyles] - btn CSS classes
 * @param  {string} [labelStyles] - label CSS classes
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
  loader,
  inputStyles = '',
  buttonStyles = '',
  labelStyles = '',
  formStyles = '',
  formGroupStyles = '',
}: IForgotPasswordProps): JSX.Element => {
  const [forgotPasswordData, setForgotPasswordData] = useState({
    code: '',
    password: '',
    confirmPassword: '',
  })
  const [errorData, setErrorData] = useState({
    code: false,
    password: false,
    confirmPassword: false,
  })
  const classNames = require('classnames')

  const FormClassCode = classNames({
    [`${className + '__form'}--error`]: errorData.code ? true : false,
  })
  const FormClassPassword = classNames({
    [`${className + '__form'}--error`]: errorData.password ? true : false,
  })
  const FormClassConfirmPassword = classNames({
    [`${className + '__form'}--error`]: errorData.confirmPassword
      ? true
      : false,
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
        value: forgotPasswordData.code,
        rules: ['CANNOT_BE_BLANK'],
      },
      {
        value: forgotPasswordData.password,
        rules: ['CANNOT_BE_BLANK'],
      },
      {
        value: forgotPasswordData.confirmPassword,
        rules: ['CANNOT_BE_BLANK'],
      },
    ]
    if (onClick && validate(data)) {
      if (forgotPasswordData.password === forgotPasswordData.confirmPassword) {
        onClick(forgotPasswordData.code, forgotPasswordData.password)
      } else {
        setErrorData({ ...errorData, password: true, confirmPassword: true })
      }
    } else {
      if (!errorData.code && !errorData.password)
        setErrorData({ code: true, password: true, confirmPassword: true })
    }
  }
  return (
    <div className={className + '__forgot-password'}>
      {globalThis.A6YReactAuthConfig &&
        globalThis.A6YReactAuthConfig.components?.forgotPasswordSubmit
          ?.title && (
          <h1>
            {
              globalThis.A6YReactAuthConfig.components?.forgotPasswordSubmit
                ?.title
            }
          </h1>
        )}
      {globalThis.A6YReactAuthConfig &&
        globalThis.A6YReactAuthConfig.components &&
        globalThis.A6YReactAuthConfig.components.forgotPasswordSubmit &&
        globalThis.A6YReactAuthConfig.components.forgotPasswordSubmit
          .headerComponent}
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
              : `${className}-group ${FormClassCode}`
          }
        >
          <Input
            id='code'
            placeholder='Confirmation code'
            typeInput='text'
            label='confirmation code'
            onChange={e => onInputChange(e, 'code')}
            value={forgotPasswordData.code}
            labelStyles={labelStyles}
            inputStyles={inputStyles}
          />
        </div>
        <div
          className={
            formGroupStyles && formGroupStyles.length > 0
              ? `${formGroupStyles} `
              : `${className}-group ${FormClassPassword}`
          }
        >
          <Input
            id='new-password'
            typeInput='password'
            placeholder='New password'
            label='new password'
            onChange={e => onInputChange(e, 'password')}
            value={forgotPasswordData.password}
            labelStyles={labelStyles}
            inputStyles={inputStyles}
          />
        </div>
        <div
          className={
            formGroupStyles && formGroupStyles.length > 0
              ? `${formGroupStyles} `
              : `${className}-group ${FormClassConfirmPassword}`
          }
        >
          <Input
            id='confirm-password'
            typeInput='password'
            placeholder='Confirm password'
            label='confirm password'
            onChange={e => onInputChange(e, 'confirmPassword')}
            value={forgotPasswordData.confirmPassword}
            labelStyles={labelStyles}
            inputStyles={inputStyles}
          />
        </div>
        <Button
          className={buttonStyles}
          role='submit'
          style='primary'
          disabled={loader}
        >
          {loader ? <Loader /> : 'Reset password'}
        </Button>
      </form>
    </div>
  )
}

export default ForgotPassword

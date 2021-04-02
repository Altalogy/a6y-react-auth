import React, { useState } from 'react'
import { Button, ErrorBoundary, Input } from '../UI'
import validate from '../../utilities/validation'
import Consents from '../Consents'

/**
 * @typedef ISignInData
 * @props {string} email - email input state
 * @props {string} password - password input state
 * @props {string} confirmPassword - confirm password for sign up
 */

export interface ISignInData {
  email: string
  password: string
  confirmPassword?: string
}

/**
 * @typedef IEmailPasswordFormProps
 * @props {string} [className] - the CSS classes
 * @props {(email: string, password: string) => void} [onClick] - onClick handler launching after submit form
 * @props {string} [submitLabel] - submit button text
 * @props {boolean} [signUp] - sign up form build
 * @props {string} [inputStyles] - input CSS classes
 * @props {string} [buttonStyles] - btn CSS classes
 * @props {string} [labelStyles] - label CSS classes
 * @props {string} [formStyles] - form CSS classes
 * @props {string} [formGroupStyles] - form group CSS classes
 */

export interface IEmailPasswordFormProps {
  className?: string
  onClick?: (email: string, password: string) => void
  submitLabel?: string
  signUp?: boolean
  buttonStyles?: string
  inputStyles?: string
  labelStyles?: string
  formStyles?: string
  formGroupStyles?: string
  path?: string
  consentsLabelStyle?: string
  consentsHrefStyle?: string
  consentInputLabelStyle?: string
  consentInputStyle?: string
  consentTextStyle?: string
  consentSpanStyle?: string
  consentsStyle?: string
}

/**
 * Renders form component with email and password
 *
 * @param  {string} [className] - the CSS classes
 * @param  {(email: string, password: string) => void} [onClick] - onClick handler launching after submit form
 * @param  {string} [submitLabel] - submit button text
 * @param  {string} [inputStyles] - input CSS classes
 * @param  {string} [buttonStyles] - btn CSS classes
 * @param  {string} [labelStyles] - label CSS classes
 * @param  {string} [formStyles] - form CSS classes
 * @param  {string} [formGroupStyles] - form group CSS classes
 *
 * @example
 * <EmailPasswordForm
 *  className='a6y-react-auth-form'
 *  onClick={onClick}
 *  submitLabel='Submit'
 *  inputStyles='',
 *  buttonStyles='',
 * />
 */

function EmailPasswordForm({
  className = 'a6y-react-auth__form',
  onClick,
  submitLabel = 'Submit',
  signUp = false,
  inputStyles = '',
  buttonStyles = '',
  labelStyles = '',
  formStyles = '',
  formGroupStyles = '',
  path,
  consentsHrefStyle = '',
  consentInputLabelStyle = '',
  consentInputStyle = '',
  consentTextStyle = '',
  consentSpanStyle = '',
  consentsStyle = '',
}: IEmailPasswordFormProps): JSX.Element {
  const [conditions, setConditions] = useState(false)
  const [conditionsError, setConditionsError] = useState(false)
  const [signUpData, setSignUpData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [errorData, setErrorData] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  })

  const classNames = require('classnames')

  const FormClassEmail = classNames({
    [`${className}--error`]: errorData.email ? true : false,
  })
  const FormClassPassword = classNames({
    [`${className}--error`]: errorData.password ? true : false,
  })
  const FormClassRepeatPassword = classNames({
    [`${className}--error`]: errorData.confirmPassword ? true : false,
  })

  const onInputChange = (e: { target: { value: string } }, target: string) => {
    setErrorData({ ...errorData, [target]: e.target.value.length === 0 })
    setSignUpData({ ...signUpData, [target]: e.target.value })
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setErrorData({
      email: false,
      password: false,
      confirmPassword: false,
    })
    e.stopPropagation()
    e.preventDefault()
    const data = [
      {
        value: signUpData.email,
        rules: ['CANNOT_BE_BLANK'],
      },
      {
        value: signUpData.password,
        rules: ['CANNOT_BE_BLANK'],
      },
    ]
    if (onClick && validate(data)) {
      if (signUp) {
        if (signUpData.password === signUpData.confirmPassword) {
          setConditionsError(!conditions)
          if (onClick && conditions) {
            onClick(signUpData.email, signUpData.password)
          }
        } else {
          setErrorData({ ...errorData, password: true, confirmPassword: true })
        }
      } else {
        setConditionsError(!conditions)
        if (onClick && conditions) {
          onClick(signUpData.email, signUpData.password)
        }
      }
    } else {
      if (!errorData.email && !errorData.password)
        setErrorData({ ...errorData, email: true, password: true })
    }
  }

  return (
    <>
      <ErrorBoundary showError={conditionsError ? true : false}>
        All required consents must be accepted.
      </ErrorBoundary>
      <form
        className={
          formStyles && formStyles.length > 0 ? formStyles : `${className}`
        }
        onSubmit={e => onSubmit(e)}
      >
        <div
          className={
            formGroupStyles && formGroupStyles.length > 0
              ? `${formGroupStyles} `
              : `${className}-group ${FormClassEmail}`
          }
        >
          <Input
            id='email'
            placeholder='Email'
            typeInput='email'
            label=''
            onChange={e => onInputChange(e, 'email')}
            value={signUpData.email}
            inputStyles={inputStyles}
            labelStyles={labelStyles}
          />
        </div>
        <div
          className={
            formGroupStyles && formGroupStyles.length > 0
              ? `${formGroupStyles} ${FormClassPassword}`
              : `${className}-group ${FormClassPassword}`
          }
        >
          <Input
            id='password'
            typeInput='password'
            placeholder='Password'
            label=''
            onChange={e => onInputChange(e, 'password')}
            value={signUpData.password}
            inputStyles={inputStyles}
            labelStyles={labelStyles}
          />
        </div>
        {signUp && (
          <div
            className={
              formGroupStyles && formGroupStyles.length > 0
                ? `${formGroupStyles} `
                : `${className}-group ${FormClassRepeatPassword}`
            }
          >
            <Input
              id='confirm-password'
              typeInput='password'
              placeholder='Confirm password'
              inputStyles={inputStyles}
              labelStyles={labelStyles}
              label=''
              onChange={e => onInputChange(e, 'confirmPassword')}
              value={signUpData.confirmPassword}
            />
          </div>
        )}
        {globalThis.A6YReactAuthConfig &&
          (globalThis.A6YReactAuthConfig.components?.consents?.display ===
            'both' ||
            globalThis.A6YReactAuthConfig.components?.consents?.display ===
              path) &&
          globalThis.A6YReactAuthConfig.components?.consents?.position ===
            'top' && (
            <Consents
              consentsHrefStyle={consentsHrefStyle}
              consentInputLabelStyle={consentInputLabelStyle}
              consentInputStyle={consentInputStyle}
              consentTextStyle={consentTextStyle}
              consentSpanStyle={consentSpanStyle}
              className={consentsStyle}
              isValid={(value: boolean) => setConditions(value)}
            />
          )}
        <Button className={buttonStyles} role='submit' style='primary'>
          {submitLabel}
        </Button>
        {globalThis.A6YReactAuthConfig &&
          (globalThis.A6YReactAuthConfig.components?.consents?.display ===
            'both' ||
            globalThis.A6YReactAuthConfig.components?.consents?.display ===
              path) &&
          globalThis.A6YReactAuthConfig.components?.consents?.position ===
            'bottom' && (
            <Consents
              consentsHrefStyle={consentsHrefStyle}
              consentInputLabelStyle={consentInputLabelStyle}
              consentInputStyle={consentInputStyle}
              consentTextStyle={consentTextStyle}
              consentSpanStyle={consentSpanStyle}
              className={consentsStyle}
              isValid={(value: boolean) => setConditions(value)}
            />
          )}
      </form>
    </>
  )
}

export default EmailPasswordForm

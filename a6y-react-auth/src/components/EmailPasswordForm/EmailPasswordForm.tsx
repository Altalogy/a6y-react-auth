import React, { useState } from 'react'
import { Button, Input } from '../UI'
import validate from '../../utilities/validation'

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
 */

export interface IEmailPasswordFormProps {
  className?: string
  onClick?: (email: string, password: string) => void
  submitLabel?: string
  signUp?: boolean
}

/**
 * Renders form component with email and password
 *
 * @param  {string} [className] - the CSS classes
 * @param  {(email: string, password: string) => void} [onClick] - onClick handler launching after submit form
 * @param  {string} [submitLabel] - submit button text
 *
 * @example
 * <EmailPasswordForm
 *  className='a6y-react-auth-form'
 *  onClick={onClick}
 *  submitLabel='Submit'
 * />
 */

function EmailPasswordForm({
  className = 'a6y-react-auth__form',
  onClick,
  submitLabel = 'Submit',
  signUp = false,
}: IEmailPasswordFormProps): JSX.Element {
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
          onClick(signUpData.email, signUpData.password)
        } else {
          setErrorData({ ...errorData, password: true, confirmPassword: true })
        }
      } else {
        onClick(signUpData.email, signUpData.password)
      }
    } else {
      if (!errorData.email && !errorData.password)
        setErrorData({ ...errorData, email: true, password: true })
    }
  }

  return (
    <form className={`${className}`} onSubmit={e => onSubmit(e)}>
      <div className={`${className}-group ${FormClassEmail}`}>
        <Input
          id='email'
          placeholder='Email'
          typeInput='email'
          label=''
          onChange={e => onInputChange(e, 'email')}
          value={signUpData.email}
        />
      </div>
      <div className={`${className}-group ${FormClassPassword}`}>
        <Input
          id='password'
          typeInput='password'
          placeholder='Password'
          label=''
          onChange={e => onInputChange(e, 'password')}
          value={signUpData.password}
        />
      </div>
      {signUp && (
        <div className={`${className}-group ${FormClassRepeatPassword}`}>
          <Input
            id='confirm-password'
            typeInput='password'
            placeholder='Confirm password'
            label=''
            onChange={e => onInputChange(e, 'confirmPassword')}
            value={signUpData.confirmPassword}
          />
        </div>
      )}
      <Button role='submit' style='primary'>
        {submitLabel}
      </Button>
    </form>
  )
}

export default EmailPasswordForm

import React, { useState } from 'react'
import { Button, Input } from '../UI'
import validate from '../../utilities/validation'

/**
 * @typedef ISignInData
 * @props {string} email - email input state
 * @props {string} password - password input state
 */

export interface ISignInData {
  email: string
  password: string
}

/**
 * @typedef IEmailPasswordFormProps
 * @props {string} [className] - the CSS classes
 * @props {(email: string, password: string) => void} [onClick] - onClick handler launching after submit form
 * @props {string} [submitLabel] - submit button text
 */

export interface IEmailPasswordFormProps {
  className?: string
  onClick?: (email: string, password: string) => void
  submitLabel?: string
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
}: IEmailPasswordFormProps): JSX.Element {
  const [signUpData, setSignUpData] = useState({
    email: '',
    password: '',
  })

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
    if (onClick && validate(data))
      onClick(signUpData.email, signUpData.password)
  }

  return (
    <form className={`${className}`} onSubmit={e => onSubmit(e)}>
      <div className={`${className}-group`}>
        <Input
          id='email'
          placeholder='Email'
          typeInput='email'
          label=''
          onChange={(e: { target: { value: string } }) =>
            setSignUpData({ ...signUpData, email: e.target.value })
          }
          value={signUpData.email}
        />
      </div>
      <div className={`${className}-group`}>
        <Input
          id='password'
          typeInput='password'
          placeholder='Password'
          label=''
          onChange={(e: { target: { value: string } }) =>
            setSignUpData({ ...signUpData, password: e.target.value })
          }
          value={signUpData.password}
        />
      </div>
      <Button role='submit' style='primary'>
        {submitLabel}
      </Button>
    </form>
  )
}

export default EmailPasswordForm

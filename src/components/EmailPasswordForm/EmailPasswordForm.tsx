import React, { useState } from 'react'
import { Button, Input } from '../UI'

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
 * @props {string} [classname] - the CSS classes
 * @props {() => void} [onClick] - onClick handler launching after submit form
 * @props {string} [submitLabel] - submit button text
 */

export interface IEmailPasswordFormProps {
  className?: string
  onClick?: () => void
  submitLabel?: string
}

/**
 * Renders form component with email and password
 *
 * @param  {string} [classname] - the CSS classes
 * @param  {() => void} [onClick] - onClick handler launching after submit form
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
  className = 'a6y-react-auth-form',
  onClick,
  submitLabel = 'Submit',
}: IEmailPasswordFormProps): JSX.Element {
  const [signUpData, setSignUpData] = useState({
    email: '',
    password: '',
  })

  const onSubmit = () => {
    if (onClick) onClick()
  }

  return (
    <form className={`${className}`} onSubmit={onSubmit}>
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
      <Button typeRole='submit' label={submitLabel} style='primary' />
    </form>
  )
}

export default EmailPasswordForm

import React, { useState } from 'react'
import { Button, Input } from '../UI'

/**
 * @typedef ISignInData
 * @props {string} email
 * @props {string} password
 */

export interface ISignInData {
  email: string
  password: string
}

/**
 * @typedef IEmailPasswordFormProps
 * @props {string} [classname]
 * @props {() => void} [onClick]
 * @props {string} [submitLabel]
 */

export interface IEmailPasswordFormProps {
  className?: string
  onClick?: () => void
  submitLabel?: string
}

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

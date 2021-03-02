import React, { useState } from 'react'
import { Button, Input } from '../UI'

/**
 * @typedef ISignUpData
 * @props {string} email
 * @props {string} password
 */

export interface ISignUpData {
  email: string
  password: string
}

/**
 * @typedef Props
 * @props {string} classname
 * @props {() => void} onClick
 */

export interface Props {
  className?: string
  onClick?: () => void
}

function EmailPasswordForm({
  className = 'a6y-react-auth-form',
  onClick,
}: Props): JSX.Element {
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
      <Button typeRole='submit' label='Sign In' style='primary' />
    </form>
  )
}

export default EmailPasswordForm

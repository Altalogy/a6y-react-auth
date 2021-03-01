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

function EmailPasswordForm(): JSX.Element {
  const [signUpData, setSignUpData] = useState({
    email: '',
    password: '',
  })

  return (
    <form className='email_password_form'>
      <div className='email_password_form_group'>
        <Input
          id='email'
          classNamePrefix='email_password_form_group'
          placeholder='Email'
          typeInput='email'
          label=''
          onChange={(e: { target: { value: string } }) =>
            setSignUpData({ ...signUpData, email: e.target.value })
          }
          value={signUpData.email}
        />
      </div>
      <div className='email_password_form_group'>
        <Input
          id='password'
          classNamePrefix='email_password_form_group'
          typeInput='password'
          placeholder='Password'
          label=''
          onChange={(e: { target: { value: string } }) =>
            setSignUpData({ ...signUpData, password: e.target.value })
          }
          value={signUpData.password}
        />
      </div>
      <Button
        typeRole='button'
        className='email_password_form_submit'
        label='Sign In'
        style='primary'
        onClick={e => e}
      />
    </form>
  )
}

export default EmailPasswordForm

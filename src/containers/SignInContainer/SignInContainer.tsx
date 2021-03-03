import React, { useState } from 'react'
import SignIn from '../../components/SignIn'

export interface ISignInProps {
  className?: string
}

const SignInContainer = ({ className }: ISignInProps): JSX.Element => {
  const [apiError, setApiError] = useState(null)
  async function signIn() {
    try {
      // sign in service
    } catch (error) {
      return setApiError(error)
    }
  }
  return (
    <div className={className ? className : 'a6y-react-auth-sign-in-cmp'}>
      <SignIn onClick={signIn} apiError={apiError} />
    </div>
  )
}

export default SignInContainer

import React, { useState } from 'react'
import SignUp from '../../components/SignUp'

export interface ISignUpProps {
  className?: string
}

const SignUpContainer = ({ className }: ISignUpProps): JSX.Element => {
  const [apiError, setApiError] = useState(null)
  async function signUp() {
    try {
      // sign up service
    } catch (error) {
      return setApiError(error)
    }
  }
  return (
    <div className={className ? className : 'a6y-react-auth-sign-in-cmp'}>
      <SignUp onClick={signUp} apiError={apiError} />
    </div>
  )
}

export default SignUpContainer

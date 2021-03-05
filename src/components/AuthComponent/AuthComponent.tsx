import React, { useState } from 'react'
import SignIn from '../../containers/SignInContainer'
import SignUp from '../../containers/SignUpContainer'
import ForgotPassword from '../../containers/ForgotPasswordContainer'

export interface IAuthProps {
  className?: string
}

const AuthComponent = ({
  className = 'a6y-react-auth',
}: IAuthProps): JSX.Element => {
  const [currentForm] = useState('sign-in')
  const getAuthForm = (): JSX.Element => {
    switch (currentForm) {
      case 'sign-up':
        return <SignUp />
      case 'forgot-password':
        return <ForgotPassword />
      default:
        return <SignIn />
    }
  }
  return <div className={className}>{getAuthForm()}</div>
}

export default AuthComponent

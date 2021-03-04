import React, { useEffect, useState } from 'react'
import SignIn from '../../containers/SignInContainer'
import SignUp from '../../containers/SignUpContainer'
import ForgotPassword from '../../containers/ForgotPasswordContainer'

export interface IAuthProps {
  config: { [key: string]: string }
  className?: string
}

const AuthComponent = ({
  config,
  className = 'a6y-react-auth',
}: IAuthProps): JSX.Element => {
  useEffect(() => {
    if (config && config.currentForm) {
      setCurrentForm(config.currentForm)
    }
  }, [])
  const [currentForm, setCurrentForm] = useState('sign-in')
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

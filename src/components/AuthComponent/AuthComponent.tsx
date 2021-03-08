import React, { useState } from 'react'
import SignIn from '../../containers/SignInContainer'
import SignUp from '../../containers/SignUpContainer'
import ForgotPassword from '../../containers/ForgotPasswordContainer'

/**
 * @typedef IAuthProps
 * @props {string} [className] - the CSS classes
 */

export interface IAuthProps {
  className?: string
}

/**
 * Renders all login component with default from config
 *
 * @param  {string} [className] - the CSS classes
 *
 * @example
 * <AuthComponent
 *  className='a6y-react-auth'
 * />
 */

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

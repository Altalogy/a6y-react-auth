import React, { useState } from 'react'
import SignIn from '../../containers/SignInContainer'
import SignUp from '../../containers/SignUpContainer'
import ForgotPassword from '../../containers/ForgotPasswordContainer'

/**
 * @typedef IAuthProps
 * @props {string} [className] - the CSS classes
 * @props {() => void} [onSuccess] - onSuccess call function
 */

export interface IAuthProps {
  className?: string
  onSuccess?: () => void
}

/**
 * Renders all login component with default from config
 *
 * @param  {string} [className] - the CSS classes
 * @param  {() => void} [onSuccess] - onSuccess call function
 *
 * @example
 * <AuthComponent
 *  className='a6y-react-auth'
 *  onSuccess={() => void}
 * />
 */

const AuthComponent = ({
  className = 'a6y-react-auth',
  onSuccess,
}: IAuthProps): JSX.Element => {
  const [currentForm] = useState('sign-in')
  const getAuthForm = (): JSX.Element => {
    switch (currentForm) {
      case 'sign-up':
        return <SignUp onSuccess={onSuccess ? onSuccess : undefined} />
      case 'forgot-password':
        return <ForgotPassword onSuccess={onSuccess ? onSuccess : undefined} />
      default:
        return <SignIn onSuccess={onSuccess ? onSuccess : undefined} />
    }
  }
  return <div className={className}>{getAuthForm()}</div>
}

export default AuthComponent

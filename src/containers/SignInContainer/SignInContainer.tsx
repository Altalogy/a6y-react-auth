import React, { useState } from 'react'
import SignIn from '../../components/SignIn'
import AuthService from '../../services/AuthService'

/**
 * @typedef ISignInContainerProps
 * @props {string} [className] - the CSS classes
 * @props {() => void} [onSuccess] - onSuccess call function
 */
export interface ISignInContainerProps {
  className?: string
  onSuccess?: () => void
}

/**
 * Renders the sign-in component with API call
 *
 * @param  {string} [className] - the CSS classes
 * @param  {() => void} [onSuccess] - onSuccess call function
 *
 * @example
 * <SignInContainer
 *  className='a6y-react-auth__sign-in'
 *  onSuccess={() => void}
 * />
 */

const SignInContainer = ({
  className,
  onSuccess,
}: ISignInContainerProps): JSX.Element => {
  const [apiError, setApiError] = useState(undefined)
  async function signIn(email: string, password: string) {
    try {
      // eslint-disable-next-line
      const response: any = await AuthService.signIn(email, password)
      if (response && response.code) {
        setApiError(response.message)
      } else if (response) {
        if (onSuccess) onSuccess()
      }
    } catch (error) {
      return setApiError(error.message)
    }
  }
  return (
    <div className={className ? className : 'a6y-react-auth__sign-in-cnt'}>
      <SignIn onClick={signIn} apiError={apiError} />
    </div>
  )
}

export default SignInContainer

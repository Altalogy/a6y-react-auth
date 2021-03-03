import React, { useState } from 'react'
import SignIn from '../../components/SignIn'

/**
 * @typedef ISignInContainerProps
 * @props {string} [className] - the CSS classes
 */
export interface ISignInContainerProps {
  className?: string
}

/**
 * Renders the sign-in component with API call
 *
 * @param  {string} [className] - the CSS classes
 *
 * @example
 * <SignInContainer
 *  className='a6y-react-auth__sign-in'
 * />
 */

const SignInContainer = ({ className }: ISignInContainerProps): JSX.Element => {
  const [apiError, setApiError] = useState(undefined)
  async function signIn() {
    try {
      // sign in service
    } catch (error) {
      return setApiError(error)
    }
  }
  return (
    <div className={className ? className : 'a6y-react-auth__sign-in'}>
      <SignIn onClick={signIn} apiError={apiError} />
    </div>
  )
}

export default SignInContainer

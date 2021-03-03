import React, { useState } from 'react'
import SignUp from '../../components/SignUp'

/**
 * @typedef ISignUpContainerProps
 * @props {string} [className] - the CSS classes
 */

export interface ISignUpContainerProps {
  className?: string
}

/**
 * Renders the sign-up component with API call
 *
 * @param  {string} [className] - the CSS classes
 *
 * @example
 * <SignUpContainer
 *  className='a6y-react-auth-sign-in-cmp'
 * />
 */

const SignUpContainer = ({ className }: ISignUpContainerProps): JSX.Element => {
  const [apiError, setApiError] = useState(undefined)
  async function signUp() {
    try {
      // sign up service
    } catch (error) {
      return setApiError(error)
    }
  }
  return (
    <div className={className ? className : 'a6y-react-auth__sign-up'}>
      <SignUp onClick={signUp} apiError={apiError} />
    </div>
  )
}

export default SignUpContainer

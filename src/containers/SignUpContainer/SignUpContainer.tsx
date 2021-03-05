import React, { useState } from 'react'
import SignUp from '../../components/SignUp'
import AuthService from '../../services/AuthService'

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
 *  className='a6y-react-auth__sign-in'
 * />
 */

const SignUpContainer = ({ className }: ISignUpContainerProps): JSX.Element => {
  const [apiError, setApiError] = useState(undefined)
  async function signUp(email: string, password: string) {
    try {
      // eslint-disable-next-line
      const response: any = await AuthService.signUp(email, password)
      if (response && response.code) {
        setApiError(response.message)
      }
    } catch (error) {
      return setApiError(error.message)
    }
  }
  return (
    <div className={className ? className : 'a6y-react-auth__sign-up-cnt'}>
      <SignUp onClick={signUp} apiError={apiError} />
    </div>
  )
}

export default SignUpContainer

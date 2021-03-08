import React, { useState } from 'react'
import SignUp from '../../components/SignUp'
import AuthService from '../../services/AuthService'

/**
 * @typedef ISignUpContainerProps
 * @props {string} [className] - the CSS classes
 * @props {() => void} [onSuccess] - onSuccess call function
 */

export interface ISignUpContainerProps {
  className?: string
  onSuccess?: () => void
}

/**
 * Renders the sign-up component with API call
 *
 * @param  {string} [className] - the CSS classes
 * @param  {() => void} [onSuccess] - onSuccess call function
 *
 * @example
 * <SignUpContainer
 *  className='a6y-react-auth__sign-in'
 *  onSuccess={() => void}
 * />
 */

const SignUpContainer = ({
  className,
  onSuccess,
}: ISignUpContainerProps): JSX.Element => {
  const [apiError, setApiError] = useState(undefined)
  async function signUp(email: string, password: string) {
    try {
      // eslint-disable-next-line
      const response: any = await AuthService.signUp(email, password)
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
    <div className={className ? className : 'a6y-react-auth__sign-up-cnt'}>
      <SignUp onClick={signUp} apiError={apiError} />
    </div>
  )
}

export default SignUpContainer

import React, { useState } from 'react'
import SignUp from '../../components/SignUp'
import AuthService from '../../services/AuthService'

/**
 * @typedef ISignUpContainerProps
 * @props {string} [className] - the CSS classes
 * @props  {(to: string) => void} [onLinkHandler] - links onClick handler
 */

export interface ISignUpContainerProps {
  className?: string
  onLinkHandler?: (to: string) => void
}

/**
 * Renders the sign-up component with API call
 *
 * @param  {string} [className] - the CSS classes
 * @param  {(to: string) => void} [onLinkHandler] - links onClick handler
 *
 * @example
 * <SignUpContainer
 *  className='a6y-react-auth__sign-in'
 *  onLinkHandler={onLinkHandler}
 * />
 */

const SignUpContainer = ({
  className,
  onLinkHandler = undefined,
}: ISignUpContainerProps): JSX.Element => {
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
      <SignUp
        onLinkHandler={onLinkHandler}
        onClick={signUp}
        apiError={apiError}
      />
    </div>
  )
}

export default SignUpContainer

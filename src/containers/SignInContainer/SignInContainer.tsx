import React, { useState } from 'react'
import SignIn from '../../components/SignIn'
import AuthService from '../../services/AuthService'

/**
 * @typedef ISignInContainerProps
 * @props {string} [className] - the CSS classes
 * @props  {(to: string) => void} [onLinkHandler] - links onClick handler
 */
export interface ISignInContainerProps {
  className?: string
  onLinkHandler?: (to: string) => void
}

/**
 * Renders the sign-in component with API call
 *
 * @param  {string} [className] - the CSS classes
 * @param  {(to: string) => void} [onLinkHandler] - links onClick handler
 *
 * @example
 * <SignInContainer
 *  className='a6y-react-auth__sign-in'
 *  onLinkHandler={onLinkHandler}
 * />
 */

const SignInContainer = ({
  className,
  onLinkHandler = undefined,
}: ISignInContainerProps): JSX.Element => {
  const [apiError, setApiError] = useState(undefined)
  async function signIn(email: string, password: string) {
    try {
      // eslint-disable-next-line
      const response: any = await AuthService.signIn(email, password)
      if (response && response.code) {
        setApiError(response.message)
      }
    } catch (error) {
      return setApiError(error.message)
    }
  }
  return (
    <div className={className ? className : 'a6y-react-auth__sign-in-cnt'}>
      <SignIn
        onLinkHandler={onLinkHandler}
        onClick={signIn}
        apiError={apiError}
      />
    </div>
  )
}

export default SignInContainer

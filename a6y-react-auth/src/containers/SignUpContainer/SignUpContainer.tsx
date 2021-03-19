/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import ConfirmationCode from '../../components/ConfirmationCode'
import SignUp from '../../components/SignUp'
import AuthService from '../../services/AuthService'

/**
 * @typedef ISignUpContainerProps
 * @props {string} [className] - the CSS classes
 * @props {(response: unknown) => void} [onSuccess] - onSuccess call function
 * @props {(to: string) => void} [onLinkHandler] - links onClick handler
 */

export interface ISignUpContainerProps {
  className?: string
  onSuccess?: (response: unknown) => void
  onLinkHandler?: (to: string) => void
}

/**
 * Renders the sign-up component with API call
 *
 * @param  {string} [className] - the CSS classes
 * @param  {(response: unknown) => void} [onSuccess] - onSuccess call function
 * @param  {(to: string) => void} [onLinkHandler] - links onClick handler
 *
 * @example
 * <SignUpContainer
 *  className='a6y-react-auth__sign-in'
 *  onSuccess={(response: unknown) => void}
 *  onLinkHandler={onLinkHandler}
 * />
 */

const SignUpContainer = ({
  className,
  onSuccess,
  onLinkHandler = undefined,
}: ISignUpContainerProps): JSX.Element => {
  const [apiError, setApiError] = useState(undefined)
  const [confirmation, setConfirmation] = useState(false)
  const [user, setUser] = useState('')
  async function signUp(email: string, password: string) {
    try {
      // eslint-disable-next-line
      const response: any = await AuthService.signUp(email, password)
      if (response && response.code) {
        setApiError(response.message)
      } else if (response) {
        if (onSuccess) onSuccess(response)
        setConfirmation(true)
        setUser(email)
      }
    } catch (error) {
      return setApiError(error.message)
    }
  }
  async function socialSignUp(data: any) {
    try {
      // eslint-disable-next-line
      const response: any = await AuthService.socialSignUp(data)
      if (response && response.code) {
        setApiError(response.message)
      } else if (response) {
        if (onSuccess) onSuccess(response)
      }
    } catch (error) {
      return setApiError(error.message)
    }
  }
  async function confirmSignUp(code: string) {
    try {
      // eslint-disable-next-line
      const response: any = await AuthService.confirmSignUp(user, code)
      if (response && response.code) {
        setApiError(response.message)
      } else if (response) {
        if (onSuccess) onSuccess(response)
      }
    } catch (error) {
      return setApiError(error.message)
    }
  }
  return (
    <div className={className ? className : 'a6y-react-auth__sign-up-cnt'}>
      {confirmation ? (
        <ConfirmationCode onClick={confirmSignUp} apiError={apiError} />
      ) : (
        <SignUp
          onLinkHandler={onLinkHandler}
          onClick={signUp}
          onSocialClick={socialSignUp}
          apiError={apiError}
        />
      )}
    </div>
  )
}

export default SignUpContainer

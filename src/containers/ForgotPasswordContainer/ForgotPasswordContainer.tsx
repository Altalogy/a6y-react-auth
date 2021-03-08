import React, { useState } from 'react'
import ForgotPassword from '../../components/ForgotPassword'
import AuthService from '../../services/AuthService'

/**
 * @typedef IForgotPasswordContainerProps
 * @props {string} [className] - the CSS classes
 * @props {(response: unknown) => void} [onSuccess] - onSuccess call function
 * @props  {(to: string) => void} [onLinkHandler] - links onClick handler
 */

export interface IForgotPasswordContainerProps {
  className?: string
  onSuccess?: (response: unknown) => void
  onLinkHandler?: (to: string) => void
}

/**
 * Renders the sign-in component with API call
 *
 * @param  {string} [className] - the CSS classes
 * @param  {(response: unknown) => void} [onSuccess] - onSuccess call function
 * @param  {(to: string) => void} [onLinkHandler] - links onClick handler
 *
 * @example
 * <ForgotPasswordContainer
 *  className='a6y-react-auth__forgot-password'
 *  onSuccess={(response: unknown) => void}
 * />
 */

const ForgotPasswordContainer = ({
  className,
  onSuccess,
  onLinkHandler = undefined,
}: IForgotPasswordContainerProps): JSX.Element => {
  const [apiError, setApiError] = useState(undefined)
  async function forgotPassword(email: string) {
    try {
      // eslint-disable-next-line
      const response: any = await AuthService.forgotPassword(email)
      if (response && response.code) {
        setApiError(response.message)
      } else if (response) {
        if (onSuccess) onSuccess(response)
      }
    } catch (error) {
      return setApiError(error)
    }
  }
  return (
    <div
      className={className ? className : 'a6y-react-auth__forgot-password-cnt'}
    >
      <ForgotPassword
        onLinkHandler={onLinkHandler}
        onClick={forgotPassword}
        apiError={apiError}
      />
    </div>
  )
}

export default ForgotPasswordContainer

import React, { useState } from 'react'
import ForgotPassword from '../../components/ForgotPassword'
import AuthService from '../../services/AuthService'

/**
 * @typedef IForgotPasswordContainerProps
 * @props {string} [className] - the CSS classes
 * @props  {(to: string) => void} [onLinkHandler] - links onClick handler
 */
export interface IForgotPasswordContainerProps {
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
 * <ForgotPasswordContainer
 *  className='a6y-react-auth__forgot-password'
 * />
 */

const ForgotPasswordContainer = ({
  className,
  onLinkHandler = undefined,
}: IForgotPasswordContainerProps): JSX.Element => {
  const [apiError, setApiError] = useState(undefined)
  async function forgotPassword(email: string) {
    try {
      // eslint-disable-next-line
      const response: any = await AuthService.forgotPassword(email)
      if (response && response.code) {
        setApiError(response.message)
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

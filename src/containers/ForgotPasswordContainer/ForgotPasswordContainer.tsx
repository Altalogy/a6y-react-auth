import React, { useState } from 'react'
import ForgotPassword from '../../components/ForgotPassword'
import AuthService from '../../services/AuthService'

/**
 * @typedef IForgotPasswordContainerProps
 * @props {string} [className] - the CSS classes
 * @props {() => void} [onSuccess] - onSuccess call function
 */
export interface IForgotPasswordContainerProps {
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
 * <ForgotPasswordContainer
 *  className='a6y-react-auth__forgot-password'
 *  onSuccess={() => void}
 * />
 */

const ForgotPasswordContainer = ({
  className,
  onSuccess,
}: IForgotPasswordContainerProps): JSX.Element => {
  const [apiError, setApiError] = useState(undefined)
  async function forgotPassword(email: string) {
    try {
      // eslint-disable-next-line
      const response: any = await AuthService.forgotPassword(email)
      if (response && response.code) {
        setApiError(response.message)
      } else if (response) {
        if (onSuccess) onSuccess()
      }
    } catch (error) {
      return setApiError(error)
    }
  }
  return (
    <div className={className ? className : 'a6y-react-auth__forgot-password'}>
      <ForgotPassword onClick={forgotPassword} apiError={apiError} />
    </div>
  )
}

export default ForgotPasswordContainer

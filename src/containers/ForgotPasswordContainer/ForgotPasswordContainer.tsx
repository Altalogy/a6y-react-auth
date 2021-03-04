import React, { useState } from 'react'
import ForgotPassword from '../../components/ForgotPassword'

/**
 * @typedef IForgotPasswordContainerProps
 * @props {string} [className] - the CSS classes
 */
export interface IForgotPasswordContainerProps {
  className?: string
}

/**
 * Renders the sign-in component with API call
 *
 * @param  {string} [className] - the CSS classes
 *
 * @example
 * <ForgotPasswordContainer
 *  className='a6y-react-auth__forgot-password'
 * />
 */

const ForgotPasswordContainer = ({
  className,
}: IForgotPasswordContainerProps): JSX.Element => {
  const [apiError, setApiError] = useState(undefined)
  async function signIn() {
    try {
      // sign in service
    } catch (error) {
      return setApiError(error)
    }
  }
  return (
    <div className={className ? className : 'a6y-react-auth__forgot-password'}>
      <ForgotPassword onClick={signIn} apiError={apiError} />
    </div>
  )
}

export default ForgotPasswordContainer

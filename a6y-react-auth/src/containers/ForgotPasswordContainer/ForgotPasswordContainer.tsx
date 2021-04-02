import React, { useState } from 'react'
import ForgotPassword, {
  ForgotPasswordSubmit,
} from '../../components/ForgotPassword'
import AuthService from '../../services/AuthService'

/**
 * @typedef IForgotPasswordContainerProps
 * @props {string} [className] - the CSS classes
 * @props {(response: unknown) => void} [onSuccess] - onSuccess call function
 * @props {(to: string) => void} [onLinkHandler] - links onClick handler
 * @props {string} [inputStyles] - input CSS classes
 * @props {string} [buttonStyles] - btn CSS classes
 * @props {string} [linkStyles] - link CSS classes
 * @props {string} [labelStyles] - label CSS classes
 * @props {string} [formStyles] - form CSS classes
 * @props {string} [formGroupStyles] - form group CSS classes
 */

export interface IForgotPasswordContainerProps {
  className?: string
  onSuccess?: (response: unknown) => void
  onLinkHandler?: (to: string) => void
  inputStyles?: string
  buttonStyles?: string
  labelStyles?: string
  linkStyles?: string
  formStyles?: string
  formGroupStyles?: string
  formLinkStyle?: string
}

/**
 * Renders the sign-in component with API call
 *
 * @param  {string} [className] - the CSS classes
 * @param  {(response: unknown) => void} [onSuccess] - onSuccess call function
 * @param  {(to: string) => void} [onLinkHandler] - links onClick handler
 * @param  {string} [inputStyles] - input CSS classes
 * @param  {string} [buttonStyles] - btn CSS classes
 * @param  {string} [linkStyles] - link CSS classes
 * @param  {string} [labelStyles] - label CSS classes
 * @param  {string} [formStyles] - form CSS classes
 * @param  {string} [formGroupStyles] - form group CSS classes
 *
 * @example
 * <ForgotPasswordContainer
 *  className='a6y-react-auth__forgot-password'
 *  onSuccess={(response: unknown) => void}
 * />
 */

const ForgotPasswordContainer = ({
  className = '',
  onSuccess,
  onLinkHandler = undefined,
  inputStyles = '',
  buttonStyles = '',
  labelStyles = '',
  linkStyles = '',
  formStyles = '',
  formGroupStyles = '',
  formLinkStyle,
}: IForgotPasswordContainerProps): JSX.Element => {
  const [user, setUser] = useState('')
  const [step, setStep] = useState(1)
  const [apiError, setApiError] = useState(undefined)
  async function forgotPassword(email: string) {
    try {
      setUser(email)
      // eslint-disable-next-line
      const response: any = await AuthService.forgotPassword(email)
      if (response && response.code) {
        setApiError(response.message)
      } else if (response) {
        setStep(2)
      }
    } catch (error) {
      return setApiError(error)
    }
  }
  async function forgotPasswordSubmit(code: string, password: string) {
    try {
      // eslint-disable-next-line
      const response: any = await AuthService.forgotPasswordSubmit(user, code, password)
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
      {step === 1 ? (
        <ForgotPassword
          className={className}
          onLinkHandler={onLinkHandler}
          onClick={forgotPassword}
          apiError={apiError}
          inputStyles={inputStyles}
          buttonStyles={buttonStyles}
          labelStyles={labelStyles}
          linkStyles={linkStyles}
          formStyles={formStyles}
          formGroupStyles={formGroupStyles}
          formLinkStyle={formLinkStyle}
        />
      ) : (
        <ForgotPasswordSubmit
          className={className}
          onClick={forgotPasswordSubmit}
          apiError={apiError}
          inputStyles={inputStyles}
          buttonStyles={buttonStyles}
          labelStyles={labelStyles}
          formStyles={formStyles}
          formGroupStyles={formGroupStyles}
        />
      )}
    </div>
  )
}

export default ForgotPasswordContainer

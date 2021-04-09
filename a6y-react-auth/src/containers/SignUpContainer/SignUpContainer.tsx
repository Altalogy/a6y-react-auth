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
 * @props {string} [inputStyles] - input CSS classes
 * @props {string} [buttonStyles] - btn CSS classes
 * @props {string} [labelStyles] - label CSS classes
 * @props {string} [linkStyles] - link CSS classes
 * @props {string} [formStyles] - form CSS classes
 * @props {string} [formGroupStyles] - form group CSS classes
 */

export interface ISignUpContainerProps {
  className?: string
  onSuccess?: (response: unknown) => void
  onLinkHandler?: (to: string) => void
  inputStyles?: string
  buttonStyles?: string
  labelStyles?: string
  linkStyles?: string
  formStyles?: string
  formGroupStyles?: string
  consentsLabelStyle?: string
  consentsHrefStyle?: string
  consentInputLabelStyle?: string
  consentInputStyle?: string
  consentTextStyle?: string
  consentSpanStyle?: string
  consentsStyle?: string
  formLinkStyle?: string
}

/**
 * Renders the sign-up component with API call
 *
 * @param  {string} [className] - the CSS classes
 * @param  {(response: unknown) => void} [onSuccess] - onSuccess call function
 * @param  {(to: string) => void} [onLinkHandler] - links onClick handler
 * @param  {string} [inputStyles] - input CSS classes
 * @param  {string} [buttonStyles] - btn CSS classes
 * @param  {string} [labelStyles] - label CSS classes
 * @param  {string} [linkStyles] - link CSS classes
 * @param  {string} [formStyles] - form CSS classes
 * @param  {string} [formGroupStyles] - form group CSS classes
 *
 * @example
 * <SignUpContainer
 *  className='a6y-react-auth__sign-in'
 *  onSuccess={(response: unknown) => void}
 *  onLinkHandler={onLinkHandler}
 * />
 */

const SignUpContainer = ({
  className = '',
  onSuccess,
  onLinkHandler = undefined,
  inputStyles = '',
  buttonStyles = '',
  labelStyles = '',
  linkStyles = '',
  formStyles = '',
  formGroupStyles = '',
  consentsHrefStyle = '',
  consentInputLabelStyle = '',
  consentInputStyle = '',
  consentTextStyle = '',
  consentSpanStyle = '',
  consentsStyle = '',
  consentsLabelStyle = '',
  formLinkStyle,
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
        if (
          globalThis &&
          globalThis.A6YReactAuthConfig &&
          globalThis.A6YReactAuthConfig.components &&
          globalThis.A6YReactAuthConfig.components.signUp &&
          globalThis.A6YReactAuthConfig.components.signUp.confirmation
        ) {
          setConfirmation(true)
        }
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
          className={className}
          onLinkHandler={onLinkHandler}
          onClick={signUp}
          onSocialClick={socialSignUp}
          apiError={apiError}
          inputStyles={inputStyles}
          labelStyles={labelStyles}
          buttonStyles={buttonStyles}
          linkStyles={linkStyles}
          formStyles={formStyles}
          formGroupStyles={formGroupStyles}
          consentsHrefStyle={consentsHrefStyle}
          consentInputLabelStyle={consentInputLabelStyle}
          consentInputStyle={consentInputStyle}
          consentTextStyle={consentTextStyle}
          consentsLabelStyle={consentsLabelStyle}
          consentSpanStyle={consentSpanStyle}
          consentsStyle={consentsStyle}
          formLinkStyle={formLinkStyle}
        />
      )}
    </div>
  )
}

export default SignUpContainer

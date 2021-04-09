/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import SignIn from '../../components/SignIn'
import AuthService from '../../services/AuthService'

/**
 * @typedef ISignInContainerProps
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
export interface ISignInContainerProps {
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
 * Renders the sign-in component with API call
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
 * <SignInContainer
 *  className='a6y-react-auth__sign-in'
 *  onSuccess={(response: unknown) => void}
 *  onLinkHandler={onLinkHandler}
 * />
 */

const SignInContainer = ({
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
  formLinkStyle,
}: ISignInContainerProps): JSX.Element => {
  const [apiError, setApiError] = useState(undefined)
  async function signIn(email: string, password: string) {
    try {
      // eslint-disable-next-line
      const response: any = await AuthService.signIn(email, password)
      if (response && response.code) {
        return setApiError(response.message)
      } else {
        if (onSuccess) return onSuccess('SUCCESS')
      }
    } catch (error) {
      return setApiError(error.message)
    }
  }
  async function socialSignIn(data: any) {
    try {
      // eslint-disable-next-line
      const response: any = await AuthService.socialSignIn(data)
      if (response && response.code) {
        return setApiError(response.message)
      } else {
        if (onSuccess) return onSuccess('SUCCESS')
      }
    } catch (error) {
      return setApiError(error.message)
    }
  }
  return (
    <div className={className ? className : 'a6y-react-auth__sign-in-cnt'}>
      <SignIn
        className={className}
        onLinkHandler={onLinkHandler}
        onClick={signIn}
        onSocialClick={socialSignIn}
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
        consentSpanStyle={consentSpanStyle}
        consentsStyle={consentsStyle}
        formLinkStyle={formLinkStyle}
      />
    </div>
  )
}

export default SignInContainer

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
  containerClassName?: string
  onSuccess?: (response: unknown) => void
  onLinkHandler?: (to: string) => void
  onResponse?: (method: string, response: unknown) => boolean
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
 * @param  {string} [containerClassName] - the CSS classes
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
  containerClassName,
  onSuccess,
  onLinkHandler = undefined,
  onResponse,
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
  const [apiError, setApiError] = useState<string | undefined>(undefined)
  const [loader, setLoader] = useState(false)
  async function signIn(email: string, password: string) {
    setLoader(true)
    try {
      // eslint-disable-next-line
      const response: any = await AuthService.signIn(email, password)
      let stopExecution = false
      if (onResponse) {
        stopExecution = onResponse('email', response)
      }
      if (stopExecution) {
        return
      }
      if (response && response.code) {
        setLoader(false)
        return setApiError(response.message)
      } else {
        setLoader(false)
        if (onSuccess) return onSuccess(response)
      }
    } catch (error) {
      setLoader(false)
      let stopExecution = false
      if (onResponse) {
        stopExecution = onResponse('email', error)
      }
      if (stopExecution) {
        return
      }
      if (error instanceof Error) {
        return setApiError(error.message)
      }
    }
  }
  async function socialSignIn(provider: string, data: any) {
    setLoader(true)
    try {
      // eslint-disable-next-line
      const response: any = await AuthService.socialSignIn(provider, data)
      let stopExecution = false
      if (onResponse) {
        stopExecution = onResponse(provider, response)
      }
      if (stopExecution) {
        return
      }
      if (response && response.code) {
        setLoader(false)
        return setApiError(response.message)
      } else {
        setLoader(false)
        if (onSuccess) return onSuccess(response)
      }
    } catch (error) {
      setLoader(false)
      let stopExecution = false
      if (onResponse) {
        stopExecution = onResponse(provider, error)
      }
      if (stopExecution) {
        return
      }
      if (error instanceof Error) {
        return setApiError(error.message)
      }
    }
  }
  return (
    <div
      className={
        containerClassName ? containerClassName : 'a6y-react-auth__sign-in-cnt'
      }
    >
      <SignIn
        loader={loader}
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

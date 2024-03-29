/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, useState } from 'react'
import ConfirmationCode from '../../components/ConfirmationCode'
import { IConsent } from '../../components/Consents/Consents'
import SignUp from '../../components/SignUp'
import AuthService from '../../services/AuthService'

/**
 * @typedef ISignUpContainerProps
 * @props {string} [className] - the CSS classes
 * @props {(response: unknown) => void} [onSuccess] - onSuccess call function
 * @props {(to: string) => void} [onLinkHandler] - links onClick handler
 * @props {(email: string, password: string) => Promise<{ success: boolean; errorMessage: string }>} [apiSignUp] - call this function instead of calling provider automatically.
 * @props {ReactNode | null} => [confirmationStep] - show custom component on instead of typical confirmation.
 * @props {boolean} [skipConfirmation=false] - skip showing confirmation step.
 * @props {string} [inputStyles] - input CSS classes
 * @props {string} [buttonStyles] - btn CSS classes
 * @props {string} [labelStyles] - label CSS classes
 * @props {string} [linkStyles] - link CSS classes
 * @props {string} [formStyles] - form CSS classes
 * @props {string} [formGroupStyles] - form group CSS classes
 */

export interface ISignUpContainerProps {
  className?: string
  containerClassName?: string
  onSuccess?: (response: unknown) => void
  onLinkHandler?: (to: string) => void
  onResponse?: (
    method: string,
    username: string,
    response: unknown,
  ) => Promise<boolean>
  apiSignUp?: (
    email: string,
    password: string,
    consents: IConsent[],
  ) => Promise<{ success: boolean; errorMessage: string }>
  confirmationStep?: ReactNode | null
  skipConfirmation?: boolean
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
  showSocialLogin?: boolean
  headerComponent?: ReactNode | null
}

/**
 * Renders the sign-up component with API call
 *
 * @param {string} [className] - the CSS classes
 * @param {string} [containerClassName] - the CSS classes
 * @param {(response: unknown) => void} [onSuccess] - onSuccess call function
 * @param {(to: string) => void} [onLinkHandler] - links onClick handler
 * @param {(email: string, password: string) => Promise<{ success: boolean; errorMessage: string }>} [apiSignUp] - call this function instead of calling provider automatically.
 * @param {ReactNode | null} => [confirmationStep] - show custom component on instead of typical confirmation.
 * @param {boolean} [skipConfirmation=false] - skip showing confirmation step.
 * @param {string} [inputStyles] - input CSS classes
 * @param {string} [buttonStyles] - btn CSS classes
 * @param {string} [labelStyles] - label CSS classes
 * @param {string} [linkStyles] - link CSS classes
 * @param {string} [formStyles] - form CSS classes
 * @param {string} [formGroupStyles] - form group CSS classes
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
  containerClassName,
  onSuccess,
  onLinkHandler = undefined,
  onResponse,
  apiSignUp,
  confirmationStep = null,
  skipConfirmation = false,
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
  showSocialLogin = true,
  headerComponent,
}: ISignUpContainerProps): JSX.Element => {
  const [apiError, setApiError] = useState<string | undefined>(undefined)
  const [confirmation, setConfirmation] = useState(false)
  const [user, setUser] = useState('')
  const [loader, setLoader] = useState(false)
  async function signUp(email: string, password: string, consents: IConsent[]) {
    setLoader(true)
    if (apiSignUp) {
      const { success, errorMessage } = await apiSignUp(
        email,
        password,
        consents,
      )
      if (!success) {
        setLoader(false)
        setApiError(errorMessage)
      } else {
        setLoader(false)
        setApiError(undefined)
      }
      return null
    }
    try {
      // eslint-disable-next-line
      const response: any = await AuthService.signUp(email, password)
      let stopExecution = false
      if (onResponse) {
        stopExecution = await onResponse('email', email, response)
      }
      if (stopExecution) {
        return
      }
      if (response && response.code) {
        setLoader(false)
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
        setLoader(false)
        setUser(email)
      }
      return null
    } catch (error) {
      setLoader(false)
      let stopExecution = false
      if (onResponse) {
        stopExecution = await onResponse('email', email, error)
      }
      if (stopExecution) {
        return
      }
      setApiError(error.message)
      return null
    }
  }
  async function socialSignUp(provider: string, data: any) {
    setLoader(true)
    try {
      // eslint-disable-next-line
      const response: any = await AuthService.socialSignUp(provider, data)
      let stopExecution = false
      if (onResponse) {
        stopExecution = await onResponse(provider, '', response)
      }
      if (stopExecution) {
        return
      }
      if (response && response.code) {
        setLoader(false)
        setApiError(response.message)
      } else if (response) {
        if (onSuccess) onSuccess(response)
        setLoader(false)
      }
    } catch (error) {
      setLoader(false)
      let stopExecution = false
      if (onResponse) {
        stopExecution = await onResponse(provider, '', error)
      }
      if (stopExecution) {
        return
      }
      setApiError(error.message)
    }
  }
  async function confirmSignUp(code: string) {
    setLoader(true)
    try {
      // eslint-disable-next-line
      const response: any = await AuthService.confirmSignUp(user, code)
      if (response && response.code) {
        setApiError(response.message)
        setLoader(false)
      } else if (response) {
        if (onSuccess) onSuccess(response)
        setLoader(false)
      }
    } catch (error) {
      setLoader(false)
      return setApiError(error.message)
    }
  }
  return (
    <div
      className={
        containerClassName ? containerClassName : 'a6y-react-auth__sign-up-cnt'
      }
    >
      {confirmation && !skipConfirmation ? (
        confirmationStep ? (
          confirmationStep
        ) : (
          <ConfirmationCode onClick={confirmSignUp} apiError={apiError} />
        )
      ) : (
        <SignUp
          loader={loader}
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
          showSocialLogin={showSocialLogin}
          headerComponent={headerComponent}
        />
      )}
    </div>
  )
}

export default SignUpContainer

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from 'react'
import EmailPasswordForm from '../EmailPasswordForm'
import FormLinks from '../FormLinks'
import { ErrorBoundary } from '../UI'
import '../../index.css'
import SocialLogin from '../SocialLogin'
import { IConsent } from '../Consents/Consents'

/**
 * @typedef ISignUpProps
 * @props {string} [className] - the CSS classes
 * @props {(email: string, password: string) => void} [onClick] - onClick handler launching after submit form
 * @props {(provider: string, response: any) => void} [onSocialClick] - onClick handler launching after submit on social providers
 * @props {string} [apiError] - api error messages
 * @props {(to: string) => void} [onLinkHandler] - links onClick handler
 * @props {string} [inputStyles] - input CSS classes
 * @props {string} [buttonStyles] - btn CSS classes
 * @props {string} [labelStyles] - label CSS classes
 * @props {string} [linkStyles] - link CSS classes
 * @props {string} [formStyles] - form CSS classes
 * @props {string} [formGroupStyles] - form group CSS classes
 */

export interface ISignUpProps {
  className?: string
  loader?: boolean
  onClick?: (email: string, password: string, consents: IConsent[]) => void
  onSocialClick?: (provider: string, response: any) => void
  apiError?: string
  onLinkHandler?: (to: string) => void
  inputStyles?: string
  buttonStyles?: string
  labelStyles?: string
  linkStyles?: string
  formGroupStyles?: string
  formStyles?: string
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
 * Renders the sign-up component
 *
 * @param {string} [className] - the CSS classes
 * @param {(email: string, password: string) => void} [onClick] - onClick handler launching after submit form
 * @param {(provider: string, response: any) => void} [onSocialClick] - onClick handler launching after submit on social providers
 * @param {string} [apiError] - api error messages
 * @param {(to: string) => void} [onLinkHandler] - links onClick handler
 * @param {string} [inputStyles] - input CSS classes
 * @param {string} [buttonStyles] - btn CSS classes
 * @param {string} [labelStyles] - label CSS classes
 * @param {string} [linkStyles] - link CSS classes
 * @param {string} [formStyles] - form CSS classes
 * @param {string} [formGroupStyles] - form group CSS classes
 *
 * @example
 * <SignUp
 *  className='a6y-react-auth__sign-up'
 *  onClick={onClick}
 *  onLinkHandler={onLinkHandler}
 * />
 */

const SignUp = ({
  className = 'a6y-react-auth__sign-up',
  onClick,
  onSocialClick,
  apiError,
  loader = false,
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
  showSocialLogin = true,
  headerComponent,
}: ISignUpProps): JSX.Element => {
  const onSubmit = (email: string, password: string, consents?: IConsent[]) => {
    if (onClick && consents) onClick(email, password, consents)
  }

  const headerCmp = headerComponent
    ? headerComponent
    : globalThis.A6YReactAuthConfig &&
      globalThis.A6YReactAuthConfig.components?.signUp?.headerComponent

  return (
    <div className={className}>
      {globalThis.A6YReactAuthConfig &&
        globalThis.A6YReactAuthConfig.components?.signUp?.title && (
          <h1>{globalThis.A6YReactAuthConfig.components?.signUp?.title}</h1>
        )}
      {headerCmp}
      <ErrorBoundary showError={apiError ? true : false}>
        {apiError}
      </ErrorBoundary>
      {onSocialClick && showSocialLogin && (
        <SocialLogin
          callback={onSocialClick}
          uiConfig={globalThis.A6YReactAuthConfig.components?.signUp?.social}
        />
      )}
      <EmailPasswordForm
        loader={loader}
        inputStyles={inputStyles}
        labelStyles={labelStyles}
        buttonStyles={buttonStyles}
        formStyles={formStyles}
        formGroupStyles={formGroupStyles}
        signUp={true}
        submitLabel='sign up'
        onClick={onSubmit}
        path='sign-up'
        consentsHrefStyle={consentsHrefStyle}
        consentInputLabelStyle={consentInputLabelStyle}
        consentInputStyle={consentInputStyle}
        consentTextStyle={consentTextStyle}
        consentSpanStyle={consentSpanStyle}
        consentsStyle={consentsStyle}
        consentsLabelStyle={consentsLabelStyle}
      />
      {globalThis.A6YReactAuthConfig &&
      globalThis.A6YReactAuthConfig.components?.signUp?.linksComponent
        ?.customLinksComponent ? (
        globalThis.A6YReactAuthConfig.components?.signUp?.linksComponent
          .customLinksComponent
      ) : (
        <FormLinks
          className={formLinkStyle}
          linkStyles={linkStyles}
          onLinkHandler={onLinkHandler}
          path='sign-up'
          beforeLinkText1={
            globalThis.A6YReactAuthConfig.components?.signUp?.linksComponent
              ?.linkText01 &&
            globalThis.A6YReactAuthConfig.components?.signUp?.linksComponent
              ?.linkText01
          }
          beforeLinkText2={
            globalThis.A6YReactAuthConfig.components?.signUp?.linksComponent
              ?.linkText02 &&
            globalThis.A6YReactAuthConfig.components?.signUp?.linksComponent
              ?.linkText02
          }
          displayLinks={
            globalThis.A6YReactAuthConfig.components?.signUp?.linksComponent
              ?.display
              ? globalThis.A6YReactAuthConfig.components?.signUp?.linksComponent
                  ?.display
              : 'both'
          }
        />
      )}
    </div>
  )
}

export default SignUp

import React, { useState } from 'react'
import SignIn from '../../containers/SignInContainer'
import SignUp from '../../containers/SignUpContainer'
import ForgotPassword from '../../containers/ForgotPasswordContainer'

/**
 * @typedef IAuthProps
 * @props {string} [className] - the CSS classes
 * @props {(response: unknown) => void} [onSuccess] - onSuccess call function
 * @props {string} [inputStyles] - input CSS classes
 * @props {string} [buttonStyles] - btn CSS classes
 * @props {string} [labelStyles] - label CSS classes
 * @props {string} [linkStyles] - link CSS classes
 * @props {string} [formStyles] - form CSS classes
 * @props {string} [formGroupStyles] - form group CSS classes
 */

export interface IAuthProps {
  className?: string
  onSuccess?: (response: unknown) => void
  inputStyles?: string
  buttonStyles?: string
  labelStyles?: string
  linkStyles?: string
  formStyles?: string
  consentsLabelStyle?: string
  consentsHrefStyle?: string
  consentInputLabelStyle?: string
  consentInputStyle?: string
  consentTextStyle?: string
  consentSpanStyle?: string
  consentsStyle?: string
  formGroupStyles?: string
  defaultFormState?: string
  formLinkStyle?: string
}

/**
 * Renders all login component with default from config
 *
 * @param  {string} [className] - the CSS classes
 * @param  {(response: unknown) => void} [onSuccess] - onSuccess call function
 * @param  {string} [inputStyles] - input CSS classes
 * @param  {string} [buttonStyles] - btn CSS classes
 * @param  {string} [labelStyles] - label CSS classes
 * @param  {string} [linkStyles] - link CSS classes
 * @param  {string} [formStyles] - form CSS classes
 * @param  {string} [formGroupStyles] - form group CSS classes
 *
 * @example
 * <AuthComponent
 *  className='a6y-react-auth'
 *  onSuccess={(response: unknown) => void}
 * />
 */

const AuthComponent = ({
  className = 'a6y-react-auth',
  onSuccess,
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
  consentsLabelStyle = '',
  consentsStyle = '',
  formLinkStyle = '',
  defaultFormState = 'sign-in',
}: IAuthProps): JSX.Element => {
  const classNames = require('classnames')
  const [currentForm, setCurrentForm] = useState(defaultFormState)
  const mainClass = classNames({
    [`a6y-react-auth__${currentForm}`]:
      className === 'a6y-react-auth' ? true : false,
  })
  const getAuthForm = (): JSX.Element => {
    switch (currentForm) {
      case 'sign-up':
        return (
          <SignUp
            onSuccess={onSuccess ? onSuccess : undefined}
            onLinkHandler={(to: string) => setCurrentForm(to)}
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
            consentsLabelStyle={consentsLabelStyle}
            formLinkStyle={formLinkStyle}
          />
        )
      case 'forgot-password':
        return (
          <ForgotPassword
            onSuccess={onSuccess ? onSuccess : undefined}
            onLinkHandler={(to: string) => setCurrentForm(to)}
            inputStyles={inputStyles}
            labelStyles={labelStyles}
            buttonStyles={buttonStyles}
            linkStyles={linkStyles}
            formStyles={formStyles}
            formGroupStyles={formGroupStyles}
            formLinkStyle={formLinkStyle}
          />
        )
      default:
        return (
          <SignIn
            onSuccess={onSuccess ? onSuccess : undefined}
            onLinkHandler={(to: string) => setCurrentForm(to)}
            inputStyles={inputStyles}
            labelStyles={labelStyles}
            buttonStyles={buttonStyles}
            linkStyles={linkStyles}
            formStyles={formStyles}
            formGroupStyles={formGroupStyles}
            formLinkStyle={formLinkStyle}
          />
        )
    }
  }
  return <div className={className + ' ' + mainClass}>{getAuthForm()}</div>
}

export default AuthComponent

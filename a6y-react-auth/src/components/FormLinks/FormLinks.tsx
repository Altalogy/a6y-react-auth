import React from 'react'
import { Link } from '../UI'
import './FormLinks.css'

/**
 * @typedef IFormLinksProps
 * @props {string} [className] - the CSS classes
 * @props {string} [path] - the name of route path
 * @props {(to: string) => void} [onLinkHandler] - links onClick handler
 * @props {string} [linkStyles] - link CSS classes
 */

export interface IFormLinksProps {
  className?: string
  path?: string
  onLinkHandler?: (to: string) => void
  linkStyles?: string
  displayLinks?: string
  beforeLinkText1?: string
  beforeLinkText2?: string
}

/**
 * Renders form component with links
 *
 * @param  {string} [className] - the CSS classes
 * @param {string} [path] - the name of route path
 * @param  {(to: string) => void} [onLinkHandler] - links onClick handler
 * @param  {string} [linkStyles] - link CSS classes
 *
 * @example
 * <FormLinks onLinkHandler={() => void} path='sign-in' className='a6y-react-auth-form' />
 */

const FormLinks = ({
  className = 'a6y-react-auth__form',
  path,
  onLinkHandler,
  linkStyles = '',
  displayLinks = '',
  beforeLinkText1 = '',
  beforeLinkText2 = '',
}: IFormLinksProps): JSX.Element => {
  function renderLinks(): JSX.Element {
    const ForgotPassword = (
      <Link onClick={onLinkHandler} className={linkStyles} to='forgot-password'>
        Forgot Password
      </Link>
    )
    const SignIn = (
      <Link onClick={onLinkHandler} className={linkStyles} to='sign-in'>
        Sign In
      </Link>
    )
    const SignUp = (
      <Link onClick={onLinkHandler} className={linkStyles} to='sign-up'>
        Sign Up
      </Link>
    )
    switch (path) {
      case 'sign-in':
        return (
          <>
            {(displayLinks === 'forgot-password' || displayLinks === 'both') &&
              beforeLinkText1 &&
              beforeLinkText1}
            {(displayLinks === 'forgot-password' || displayLinks === 'both') &&
              ForgotPassword}
            {(displayLinks === 'sign-up' || displayLinks === 'both') &&
              beforeLinkText2 &&
              beforeLinkText2}
            {(displayLinks === 'sign-up' || displayLinks === 'both') && SignUp}
          </>
        )
      case 'sign-up':
        return (
          <>
            {(displayLinks === 'forgot-password' || displayLinks === 'both') &&
              beforeLinkText1 &&
              beforeLinkText1}
            {(displayLinks === 'forgot-password' || displayLinks === 'both') &&
              ForgotPassword}
            {(displayLinks === 'sign-in' || displayLinks === 'both') &&
              beforeLinkText2 &&
              beforeLinkText2}
            {(displayLinks === 'sign-in' || displayLinks === 'both') && SignIn}
          </>
        )
      default:
        return (
          <>
            {(displayLinks === 'sign-up' || displayLinks === 'both') &&
              beforeLinkText1 &&
              beforeLinkText1}
            {(displayLinks === 'sign-up' || displayLinks === 'both') && SignUp}
            {(displayLinks === 'sign-in' || displayLinks === 'both') &&
              beforeLinkText2 &&
              beforeLinkText2}
            {(displayLinks === 'sign-in' || displayLinks === 'both') && SignIn}
          </>
        )
    }
  }
  return <div className={className}>{renderLinks()}</div>
}

export default FormLinks

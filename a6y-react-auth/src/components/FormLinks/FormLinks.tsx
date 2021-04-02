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
}: IFormLinksProps): JSX.Element => {
  function renderLinks(): JSX.Element {
    const ForgotPassword = (
      <Link onClick={onLinkHandler} className={linkStyles} to='forgot-password'>
        Forgot Password
      </Link>
    )
    switch (path) {
      case 'sign-in':
        return (
          <>
            {ForgotPassword}
            <Link onClick={onLinkHandler} className={linkStyles} to='sign-up'>
              Sign Up
            </Link>
          </>
        )
      case 'sign-up':
        return (
          <>
            {ForgotPassword}
            <Link onClick={onLinkHandler} className={linkStyles} to='sign-in'>
              Sign In
            </Link>
          </>
        )
      default:
        return (
          <>
            <Link onClick={onLinkHandler} className={linkStyles} to='sign-in'>
              Sign In
            </Link>
            <Link onClick={onLinkHandler} className={linkStyles} to='sign-up'>
              Sign Up
            </Link>
          </>
        )
    }
  }
  return <div className={className}>{renderLinks()}</div>
}

export default FormLinks

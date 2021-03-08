import React from 'react'
import { Link } from '../UI'
import './FormLinks.css'

/**
 * @typedef IFormLinksProps
 * @props {string} [className] - the CSS classes
 * @props {string} [path] - the name of route path
 * @props  {(to: string) => void} [onLinkHandler] - links onClick handler
 */

export interface IFormLinksProps {
  className?: string
  path?: string
  onLinkHandler?: (to: string) => void
}

/**
 * Renders form component with links
 *
 * @param  {string} [className] - the CSS classes
 * @param {string} [path] - the name of route path
 * @param  {(to: string) => void} [onLinkHandler] - links onClick handler
 *
 * @example
 * <FormLinks onLinkHandler={() => void} path='sign-in' className='a6y-react-auth-form' />
 */

const FormLinks = ({
  className = 'a6y-react-auth__form',
  path,
  onLinkHandler,
}: IFormLinksProps): JSX.Element => {
  function renderLinks(): JSX.Element {
    const ForgotPassword = (
      <Link
        onClick={onLinkHandler}
        className={className + '__link'}
        to='/forgot-password'
      >
        Forgot Password
      </Link>
    )
    switch (path) {
      case 'sign-in':
        return (
          <>
            {ForgotPassword}
            <Link
              onClick={onLinkHandler}
              className={className + '__link'}
              to='/sign-up'
            >
              Sign Up
            </Link>
          </>
        )
      case 'sign-up':
        return (
          <>
            {ForgotPassword}
            <Link
              onClick={onLinkHandler}
              className={className + '__link'}
              to='/sign-in'
            >
              Sign In
            </Link>
          </>
        )
      default:
        return (
          <>
            <Link
              onClick={onLinkHandler}
              className={className + '__link'}
              to='/sign-in'
            >
              Sign In
            </Link>
            <Link
              onClick={onLinkHandler}
              className={className + '__link'}
              to='/sign-up'
            >
              Sign Up
            </Link>
          </>
        )
    }
  }
  return <div className={className + '__links'}>{renderLinks()}</div>
}

export default FormLinks

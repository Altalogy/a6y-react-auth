import React from 'react'
import { Link } from '../UI'
import './FormLinks.css'

/**
 * @typedef IFormLinksProps
 * @props {string} [className] - the CSS classes
 * @props {string} [path] - the name of route path
 */

export interface IFormLinksProps {
  className?: string
  path?: string
}

/**
 * Renders form component with links
 *
 * @param  {string} [className] - the CSS classes
 * @param {string} [path] - the name of route path
 *
 * @example
 * <FormLinks path='sign-in' className='a6y-react-auth-form' />
 */

const FormLinks = ({
  className = 'a6y-react-auth__form',
  path,
}: IFormLinksProps): JSX.Element => {
  function renderLinks(): JSX.Element {
    switch (path) {
      case 'sign-in':
        return (
          <>
            <Link className={className + '__link'} to='/forgot-password'>
              Forgot Password
            </Link>
            <Link className={className + '__link'} to='/sign-up'>
              Sign Up
            </Link>
          </>
        )
      case 'sign-up':
        return (
          <>
            <Link className={className + '__link'} to='/forgot-password'>
              Forgot Password
            </Link>
            <Link className={className + '__link'} to='/sign-in'>
              Sign In
            </Link>
          </>
        )
      default:
        return (
          <>
            <Link className={className + '__link'} to='/forgot-password'>
              Forgot Password
            </Link>
          </>
        )
    }
  }
  return <div className={className + '__links'}>{renderLinks()}</div>
}

export default FormLinks

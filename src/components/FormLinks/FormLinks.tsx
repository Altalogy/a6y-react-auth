import React from 'react'
import { Link } from '../UI'
import './FormLinks.css'

/**
 * @typedef IFormLinksProps
 * @props {string} [className] - the CSS classes
 */

export interface IFormLinksProps {
  className?: string
}

/**
 * Renders form component with links
 *
 * @param  {string} [className] - the CSS classes
 *
 * @example
 * <FormLinks className='a6y-react-auth-form' />
 */

const FormLinks = ({
  className = 'a6y-react-auth__form',
}: IFormLinksProps): JSX.Element => {
  return (
    <div className={className + '__links'}>
      <Link className={className + '__link'} to='/forgot-password'>
        Forgot Password
      </Link>
      <Link className={className + '__link'} to='/sign-up'>
        Sign Up
      </Link>
    </div>
  )
}

export default FormLinks

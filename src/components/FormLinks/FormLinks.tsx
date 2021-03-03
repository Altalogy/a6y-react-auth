import React from 'react'
import { Link } from '../UI'
import './FormLinks.css'

/**
 * @typedef IFormLinksProps
 * @props {string} classname
 */

export interface IFormLinksProps {
  className?: string
}

const FormLinks = ({
  className = 'a6y-react-auth-form',
}: IFormLinksProps): JSX.Element => {
  return (
    <div className={className + '-links'}>
      <Link className={className + '-link'} to='/forgot-password'>
        Forgot Password
      </Link>
      <Link className={className + '-link'} to='/sign-up'>
        Sign Up
      </Link>
    </div>
  )
}

export default FormLinks

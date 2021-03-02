import React from 'react'
import { Link } from '../UI'

/**
 * @typedef Props
 * @props {string} classname
 */

export interface Props {
  className?: string
}

const FormLinks = ({
  className = 'a6y-react-auth-form',
}: Props): JSX.Element => {
  return (
    <div className={className + '-links'}>
      <Link className={className} to='/sign-up'>
        Forgot Password
      </Link>
      <Link className={className} to='/forgot-password'>
        Sign Up
      </Link>
    </div>
  )
}

export default FormLinks

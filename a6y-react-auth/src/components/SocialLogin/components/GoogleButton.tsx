/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Button } from '../../UI'
import googleIcon from '../../../assets/icons/google.svg'

/**
 * Renders the Google button
 *
 * @param  {(response: any) => void} [onClick]
 * @param  {string} [className]
 * @param  {string} [iconClassName]
 * @param  {string} [textClassName]
 *
 * @example
 * <GoogleButton
 *  onClick={}
 * />
 */
const GoogleButton = ({
  onClick,
  className = 'a6y-react-auth__google-btn',
  iconClassName = '',
  textClassName = '',
}: {
  onClick: (response: any) => void
  className?: string
  iconClassName?: string
  textClassName?: string
}): JSX.Element => {
  return (
    <Button role='button' className={className} onClick={onClick}>
      <img src={googleIcon} alt='google-icon' className={iconClassName} />
      <span className={textClassName}>Login with Google</span>
    </Button>
  )
}

export default GoogleButton

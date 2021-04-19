/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Button } from '../../UI'
import googleIcon from '../../../assets/icons/google.svg'

/**
 * Renders the Google button
 *
 * @param  {(response: any) => void} [onClick]
 *
 * @example
 * <GoogleButton
 *  onClick={}
 * />
 */
const GoogleButton = ({
  onClick,
}: {
  onClick: (response: any) => void
}): JSX.Element => {
  return (
    <Button
      role='button'
      className='a6y-react-auth__google-btn'
      onClick={onClick}
    >
      <img src={googleIcon} alt='google-icon' /> Login with Google
    </Button>
  )
}

export default GoogleButton

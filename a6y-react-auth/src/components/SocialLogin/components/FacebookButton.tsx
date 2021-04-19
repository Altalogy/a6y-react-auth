/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Button } from '../../UI'
import facebookIcon from '../../../assets/icons/facebook.svg'

/**
 * Renders the Facebook button
 *
 * @param  {(response: any) => void} [onClick]
 *
 * @example
 * <FacebookButton
 *  onClick={}
 * />
 */
const FacebookButton = ({
  onClick,
}: {
  onClick: (response: any) => void
}): JSX.Element => {
  return (
    <Button
      role='button'
      className='a6y-react-auth__facebook-btn'
      onClick={onClick}
    >
      <img src={facebookIcon} alt='facebook-icon' /> Login with Facebook
    </Button>
  )
}

export default FacebookButton

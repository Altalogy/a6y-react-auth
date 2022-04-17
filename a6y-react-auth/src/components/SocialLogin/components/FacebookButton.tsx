/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Button } from '../../UI'
import facebookIcon from '../../../assets/icons/facebook.svg'

/**
 * Renders the Facebook button
 *
 * @param  {(response: any) => void} [onClick]
 * @param  {string} [className]
 * @param  {string} [iconClassName]
 * @param  {string} [textClassName]
 *
 * @example
 * <FacebookButton
 *  onClick={}
 * />
 */
const FacebookButton = ({
  onClick,
  className = 'a6y-react-auth__facebook-btn',
  iconClassName = '',
  textClassName = '',
  uiConfig,
}: {
  onClick: (response: any) => void
  className?: string
  iconClassName?: string
  textClassName?: string
  uiConfig?: {
    buttonText?: string
  }
}): JSX.Element => {
  return (
    <Button role='button' className={className} onClick={onClick}>
      <img src={facebookIcon} alt='facebook-icon' className={iconClassName} />
      <span className={textClassName}>
        {uiConfig?.buttonText ? uiConfig.buttonText : 'Login with Facebook'}
      </span>
    </Button>
  )
}

export default FacebookButton

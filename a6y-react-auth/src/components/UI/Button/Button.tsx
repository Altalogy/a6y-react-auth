import React from 'react'
import './Button.css'

/**
 * @typedef IButtonProps
 * @props {React.ReactNode} children - the button's text
 * @props {string} role - the html role for button 'button' | 'submit'
 * @props {React.MouseEventHandler<HTMLButtonElement>} [onclick] - onClick handler.
 * @props {string} [className] - the CSS classes.
 * @props {string} [style] - the CSS default style 'primary' | 'secondary'
 * @props {boolean} [disabled] - disable button
 */

export interface IButtonProps {
  children: React.ReactNode
  role: 'button' | 'submit'
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  style?: 'primary' | 'secondary'
  disabled?: boolean
}

/**
 * Renders the Button component.
 *
 * @param {React.ReactNode} children - the button's text.
 * @param {string} [className] - the CSS classes.
 * @param {React.MouseEventHandler<HTMLButtonElement>} [onClick] - onClick handler.
 * @param {string} [style] - the CSS default style 'primary' | 'secondary'
 * @param {string} role - the html role for button 'button' | 'submit'
 * @param {boolean} [disabled] - disable button
 *
 * @example
 * <Button
 *  onClick={e => e}
 *  className='a6y-react-auth-button'
 *  style='primary'
 *  role='button'
 * >
 *  Click me
 * </Button
 */

const Button = ({
  role = 'button',
  children,
  className,
  onClick,
  disabled = false,
  style = 'primary',
}: IButtonProps): JSX.Element => {
  const classNames = require('classnames')
  const btnClass = classNames({
    [`a6y-react-auth__button a6y-react-auth__button--${style}`]: style
      ? true
      : false,
  })
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={className && className.length > 0 ? className : btnClass}
      type={role}
    >
      {children}
    </button>
  )
}

export default Button

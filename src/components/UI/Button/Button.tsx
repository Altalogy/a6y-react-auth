import React from 'react'
import './Button.css'

/**
 * @typedef IButtonProps
 * @props {string} label - the button's text
 * @props {string} typeRole - the html role for button 'button' | 'submit'
 * @props {React.MouseEventHandler<HTMLButtonElement>} [onclick] - onClick handler.
 * @props {string} [classname] - the CSS classes.
 * @props {string} [style] - the CSS default style 'primary' | 'secondary'
 */

export interface IButtonProps {
  label: string
  typeRole: 'button' | 'submit'
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  style?: 'primary' | 'secondary'
}

/**
 * Renders the Button component.
 *
 * @param {string} label - the button's text.
 * @param {string} [className] - the CSS classes.
 * @param {React.MouseEventHandler<HTMLButtonElement>} [onClick] - onClick handler.
 * @param {string} [style] - the CSS default style 'primary' | 'secondary'
 * @param {string} typeRole - the html role for button 'button' | 'submit'
 *
 * @example
 * <Button
 *  onClick={e => e}
 *  className='a6y-react-auth-button'
 *  style='primary'
 *  typeRole='button'
 * >
 *  Click me
 * </Button
 */

const Button = ({
  typeRole = 'button',
  label,
  className = 'a6y-react-auth-button',
  onClick,
  style = 'primary',
}: IButtonProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={style ? className + ' ' + style : className}
      type={typeRole}
    >
      {label}
    </button>
  )
}

export default Button

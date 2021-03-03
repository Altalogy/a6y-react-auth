import React from 'react'
import './Button.css'

/**
 * @typedef IButtonProps
 * @props {string} label
 * @props {string} typeRole
 * @props {function} onclick
 * @props {string} classname
 * @props {enum} style
 */

export interface IButtonProps {
  label: string
  typeRole: 'button' | 'submit'
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  style?: 'primary' | 'secondary'
}

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

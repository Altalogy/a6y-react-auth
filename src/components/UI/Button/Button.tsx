import React from 'react'
import './Button.css'

/**
 * @typedef Props
 * @props {string} label
 * @props {string} typeRole
 * @props {function} onclick
 * @props {string} classname
 * @props {enum} style
 */

export interface Props {
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
}: Props): JSX.Element => {
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

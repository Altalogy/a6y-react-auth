import React from 'react'

/**
 * @typedef Props
 * @props {string} label
 * @props {string} type
 * @props {function} onclick
 * @props {string} classname
 */

export interface Props {
  label: string
  type: string
  classname: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({ label, classname, onClick }: Props): JSX.Element => {
  return (
    <button onClick={onClick} className={`btn btn--${classname}`}>
      {label}
    </button>
  )
}

export default Button

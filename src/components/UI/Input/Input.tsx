import React from 'react'
import './Input.css'

/**
 * @typedef Props
 * @props {string} id
 * @props {string} label
 * @props {string} classNamePrefix
 * @props {function} onChange
 * @props {string} placeholder
 * @props {string} value
 * @props {string} typeInput
 */

export interface Props {
  id: string
  label?: string
  className?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  value: string
  typeInput: string
}

const Input = ({
  id,
  label = '',
  className = 'a6y-react-auth-input',
  onChange,
  placeholder = id,
  value,
  typeInput,
}: Props): JSX.Element => {
  return (
    <label
      htmlFor={id}
      className={`${className} ${className}${id && '--' + id}`}
    >
      {label && label}
      <input
        id={id}
        name={id}
        type={typeInput}
        onChange={onChange}
        className={`${className} ${className}${id && '--' + id}`}
        placeholder={placeholder}
        value={value ? value : ''}
      />
    </label>
  )
}

export default Input

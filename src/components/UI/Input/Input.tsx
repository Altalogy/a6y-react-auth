import React from 'react'
import './Input.css'

/**
 * @typedef IInputProps
 * @props {string} id
 * @props {string} label
 * @props {string} classNamePrefix
 * @props {function} onChange
 * @props {string} placeholder
 * @props {string} value
 * @props {string} typeInput
 */

export interface IInputProps {
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
  className = 'a6y-react-auth',
  onChange,
  placeholder = id,
  value,
  typeInput,
}: IInputProps): JSX.Element => {
  return (
    <label
      htmlFor={id}
      className={`${className}-label ${className}-label${id && '--' + id}`}
    >
      {label && label}
      <input
        id={id}
        name={id}
        type={typeInput}
        onChange={onChange}
        className={`${className}-label-input ${className}-label-input${
          id && '--' + id
        }`}
        placeholder={placeholder}
        value={value ? value : ''}
      />
    </label>
  )
}

export default Input

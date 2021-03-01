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
  label: string
  classNamePrefix: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  value: string
  typeInput: string
}

const Input = ({
  id,
  label,
  classNamePrefix,
  onChange,
  placeholder,
  value,
  typeInput,
}: Props): JSX.Element => {
  return (
    <label
      htmlFor={id}
      className={`${classNamePrefix}_label ${classNamePrefix}_label${
        id && '--' + id
      }`}
    >
      {label && label}
      <input
        id={id}
        name={id}
        type={typeInput}
        onChange={onChange}
        className={`${classNamePrefix}_label_input ${classNamePrefix}_label_input${
          id && '--' + id
        }`}
        placeholder={placeholder}
        value={value ? value : ''}
      />
    </label>
  )
}

export default Input

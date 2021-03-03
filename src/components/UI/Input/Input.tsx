import React from 'react'
import './Input.css'

/**
 * @typedef IInputProps
 * @props {string} id - the ID's of input element
 * @props {string} [label] - the label text
 * @props {string} [className] - the CSS classes prefix -label and -input
 * @props {(e: React.ChangeEvent<HTMLInputElement>) => void} onChange - onChange handler
 * @props {string} [placeholder] - the placeholder text for input element
 * @props {string} value - value for input
 * @props {string} typeInput - the HTML input type
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

/**
 * Renders the Label with Input component.
 *
 * @param {string} id - the ID's of input element
 * @param {string} [label] - the label text
 * @param {string} [className] - the CSS classes prefix -label and -input
 * @param {e => handleChange(e.target.value)} onChange - onChange handler
 * @param {string} [placeholder] - the placeholder text for input element
 * @param {string} value - value for input
 * @param {string} typeInput - the HTML input type
 *
 * @example
 * <Input
 *  id='username'
 *  className='a6y-react-auth'
 *  onChange={e => handleChange(e.target.value)}
 *  placeholder='user'
 *  label='username'
 *  value={value}
 *  typeInput='text'
 * />
 */
const Input = ({
  id,
  label = '',
  className = 'a6y-react-auth',
  onChange,
  placeholder = id,
  value,
  typeInput,
}: IInputProps): JSX.Element => {
  const classNames = require('classnames')
  const LabelClass = classNames({
    [`${className}__label`]: true,
    [`${className}__label--${id}`]: id ? true : false,
  })
  const InputClass = classNames({
    [`${className}__label__input`]: true,
    [`${className}__label__input--${id}`]: id ? true : false,
  })
  return (
    <label htmlFor={id} className={LabelClass}>
      {label && label}
      <input
        id={id}
        name={id}
        type={typeInput}
        onChange={onChange}
        className={InputClass}
        placeholder={placeholder}
        value={value ? value : ''}
      />
    </label>
  )
}

export default Input

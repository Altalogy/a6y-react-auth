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
 * @props {string} [labelStyles] - the CSS classes for label
 * @props {string} [inputStyles] - the CSS classes for input
 */

export interface IInputProps {
  id: string
  label?: string
  className?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  value: string
  typeInput: string
  labelStyles?: string
  inputStyles?: string
}

/**
 * Renders the Label with Input component.
 *
 * @param {string} id - the ID's of input element
 * @param {string} [label] - the label text
 * @param {string} [className] - the CSS classes prefix -label and -input
 * @param {string} [labelStyles] - the CSS classes for label
 * @param {string} [inputStyles] - the CSS classes for input
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
  labelStyles,
  inputStyles,
  className = 'a6y-react-auth',
  onChange,
  placeholder = id,
  value,
  typeInput,
}: IInputProps): JSX.Element => {
  const classNames = require('classnames')
  const LabelClass = classNames({
    [`${className}__label--${id}`]: id ? true : false,
  })
  const InputClass = classNames({
    [`${className}__label__input--${id}`]: id ? true : false,
  })
  return (
    <label
      htmlFor={id}
      className={
        labelStyles && labelStyles.length > 0
          ? `${labelStyles} `
          : `${className}__label ` + LabelClass
      }
    >
      {label &&
        globalThis.A6YReactAuthConfig.components?.Inputs?.labels &&
        label}
      <input
        id={id}
        name={id}
        type={typeInput}
        onChange={onChange}
        className={
          inputStyles && inputStyles.length > 0
            ? `${inputStyles} `
            : `${className}__label__input ` + InputClass
        }
        placeholder={placeholder}
        value={value ? value : ''}
      />
    </label>
  )
}

export default Input

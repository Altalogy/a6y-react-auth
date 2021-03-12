import React from 'react'
import './Checkbox.css'

/**
 * @typedef ICheckboxProps
 * @props {string} id - the ID's of input element
 * @props {React.ReactChild} [children] - the label text
 * @props {string} [className] - the CSS classes prefix -label and -input
 * @props {(e: React.ChangeEvent<HTMLCheckboxElement>) => void} onChange - onChange handler
 * @props {string} [placeholder] - the placeholder text for input element
 * @props {string} value - value for input
 */

export interface ICheckboxProps {
  id: string
  children?: React.ReactChild
  className?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  value: string
}

/**
 * Renders the Label with Checkbox component.
 *
 * @param {string} id - the ID's of input element
 * @param {React.ReactChild} [children] - the label text
 * @param {string} [className] - the CSS classes prefix -label and -input
 * @param {e => handleChange(e.target.value)} onChange - onChange handler
 * @param {string} [placeholder] - the placeholder text for input element
 * @param {string} value - value for input
 *
 * @example
 * <Checkbox
 *  id='username'
 *  className='a6y-react-auth'
 *  onChange={e => handleChange(e.target.value)}
 *  placeholder='user'
 *  value={value}
 * >
 *  checkbox text or <p></p>
 * </Checkbox>
 */
const Checkbox = ({
  id,
  children,
  className = 'a6y-react-auth',
  onChange,
  placeholder = id,
  value,
}: ICheckboxProps): JSX.Element => {
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
      className={`${className}__checkbox-label ` + LabelClass}
    >
      <p>{children && children}</p>
      <input
        id={id}
        name={id}
        type='checkbox'
        onChange={onChange}
        className={`${className}__checkbox-label__input ` + InputClass}
        placeholder={placeholder}
        value={value ? value : ''}
      />
      <span className={`${className}__checkbox-label__input--checkmark`} />
    </label>
  )
}

export default Checkbox

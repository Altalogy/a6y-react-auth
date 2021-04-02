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
  value: string
  labelStyle?: string
  inputStyle?: string
  textStyle?: string
  spanStyle?: string
}

/**
 * Renders the Label with Checkbox component.
 *
 * @param {string} id - the ID's of input element
 * @param {React.ReactChild} [children] - the label text
 * @param {string} [className] - the CSS classes prefix -label and -input
 * @param {e => handleChange(e.target.value)} onChange - onChange handler
 * @param {string} value - value for input
 *
 * @example
 * <Checkbox
 *  id='username'
 *  className='a6y-react-auth'
 *  onChange={e => handleChange(e.target.value)}
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
  value,
  labelStyle,
  inputStyle,
  textStyle,
  spanStyle,
}: ICheckboxProps): JSX.Element => {
  return (
    <label
      htmlFor={id}
      className={labelStyle ? labelStyle : `${className}__checkbox-label `}
    >
      <p className={textStyle ? textStyle : ''}>{children && children}</p>
      <input
        id={id}
        name={id}
        type='checkbox'
        onChange={onChange}
        className={
          inputStyle ? inputStyle : `${className}__checkbox-label__input `
        }
        value={value ? value : ''}
      />
      <span
        className={
          spanStyle
            ? spanStyle
            : `${className}__checkbox-label__input--checkmark`
        }
      />
    </label>
  )
}

export default Checkbox

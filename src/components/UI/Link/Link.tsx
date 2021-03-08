import React from 'react'
import './Link.css'

/**
 * @typedef ILinkProps
 * @props {React.ReactNode} children - the link's text.
 * @props {string} [className] - the CSS classes.
 * @props {() => void} [onCLick] - onClick handler.
 * @props {string} to - the href attribute of the link.
 * @props {string} [underline] - the CSS style with underlines 'none' | 'hover' | 'always'
 * @props {string} [style] - the CSS default style 'primary' | 'secondary' | 'custom'
 */

export interface ILinkProps {
  children: React.ReactNode
  className?: string
  onClick?: (to: string) => void
  to: string
  underline?: 'none' | 'hover' | 'always'
  style?: 'primary' | 'secondary' | 'custom'
}

/**
 * Renders the Link component.
 *
 * @param {React.ReactNode} children - the link's text.
 * @param {string} [className] - the CSS classes.
 * @param {() => void} [onClick] - onClick handler.
 * @param {string} to - the href attribute of the link.
 * @param {string} [style] - the CSS default style 'primary' | 'secondary' | 'custom'
 *
 * @example
 * <Link
 *  to={"https://xyz.com"}
 *  className='a6y-react-auth-form-link
 *  style='custom'
 * >
 *  My Link
 * </Link
 */

const Link = ({
  children,
  className = 'a6y-react-auth__form__link',
  onClick = undefined,
  style = 'primary',
  to,
}: ILinkProps): JSX.Element => {
  const classNames = require('classnames')

  const LinkClass = classNames({
    [`${className}--${style}`]: style ? true : false,
  })

  function handleLinkClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    e.stopPropagation()
    if (onClick) onClick(to)
  }
  if (onClick) {
    return (
      <button
        onClick={e => handleLinkClick(e)}
        className={className + ' ' + LinkClass}
      >
        {children}
      </button>
    )
  }
  return (
    <a href={to} className={className + ' ' + LinkClass}>
      {children}
    </a>
  )
}

export default Link

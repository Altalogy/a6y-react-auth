import React from 'react'
import './Link.css'

/**
 * @typedef ILinkProps
 * @props {React.ReactNode} children
 * @props {string} className
 * @props {() => void} onCLick
 * @props {string} to
 * @props {string} underline
 * @props {string} style
 */

export interface ILinkProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  to: string
  underline?: 'none' | 'hover' | 'always'
  style?: 'primary' | 'secondary' | 'custom'
}

const Link = ({
  children,
  className = 'a6y-react-auth-form-link',
  onClick = undefined,
  style = 'primary',
  underline = 'none',
  to,
}: ILinkProps): JSX.Element => {
  function handleLinkClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault()
    e.stopPropagation()
    if (onClick) onClick()
  }
  if (onClick) {
    return (
      <a
        href='#'
        onClick={e => handleLinkClick(e)}
        className={className + ' ' + 'underline-' + underline + ' ' + style}
      >
        {children}
      </a>
    )
  }
  return (
    <a
      href={to}
      className={className + ' ' + 'underline-' + underline + ' ' + style}
    >
      {children}
    </a>
  )
}

export default Link

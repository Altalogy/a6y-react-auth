import React from 'react'
import './Link.css'

/**
 * @typedef Props
 * @props {React.ReactNode} children
 * @props {string} className
 * @props {() => void} onCLick
 * @props {string} to
 * @props {string} underline
 * @props {string} color
 */

export interface Props {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  to: string
  underline?: 'none' | 'hover' | 'always'
  color?: 'primary' | 'secondary' | 'custom'
}

const Link = ({
  children,
  className = 'a6y-react-auth-form-link',
  onClick = undefined,
  color = 'primary',
  underline = 'none',
  to,
}: Props): JSX.Element => {
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
        className={className + ' ' + 'underline-' + underline + ' ' + color}
      >
        {children}
      </a>
    )
  }
  return (
    <a
      href={to}
      className={className + ' ' + 'underline-' + underline + ' ' + color}
    >
      {children}
    </a>
  )
}

export default Link

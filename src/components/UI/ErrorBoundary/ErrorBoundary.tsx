import React from 'react'
import './ErrorBoundary.css'

/**
 * @typedef IErrorBoundaryProps
 *
 * @props {string} [className] - the CSS classname
 * @props {boolean} showError - state which determines if an error message will be displayed
 * @props {React.ReactNode} children - the error message it can be string or react child with string
 * @props {string} [style] - the CSS style for error message 'primary' | 'secondary'
 * @props {string} [status] - the status of message 'success' | 'warning' | 'error' | 'validation'
 */

export interface IErrorBoundaryProps {
  className?: string
  showError: boolean
  children: React.ReactNode
  style?: 'primary' | 'secondary'
  status?: 'success' | 'warning' | 'error' | 'validation'
}

/**
 * Renders component with API error or Web App error messages
 *
 * @param {string} [className] - the CSS classname
 * @param {boolean} showError - state which determines if an error message will be displayed
 * @param {React.ReactNode} children - the error message it can be string or react child with string
 * @param {string} [style] - the CSS style for error message 'primary' | 'secondary'
 * @param {string} [status] - the status of message 'success' | 'warning' | 'error' | 'validation'
 *
 * @example
 * <ErrorBoundary className='a6y-react-auth-error-boundary' showError={true}>
 *    Error message or React child with message
 * </ErrorBoundary>
 */

const ErrorBoundary = ({
  className = 'a6y-react-auth-error-boundary',
  showError = false,
  children = 'Ups! Something were wrong',
  style = 'primary',
  status = 'error',
}: IErrorBoundaryProps): JSX.Element => {
  const classNames = require('classnames')
  const ErrorBoundaryClass = classNames({
    [`${className}`]: true,
    [`${className}-${style}`]: showError,
    [`${className}-${status}`]: showError,
  })
  return <div className={ErrorBoundaryClass}>{showError && children}</div>
}

export default ErrorBoundary

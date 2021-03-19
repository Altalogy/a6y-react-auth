import React, { useState } from 'react'
import validate from '../../utilities/validation'
import { ErrorBoundary, Input } from '../UI'

/**
 * @typedef IConfirmationCodeProps
 * @props {string} [className] - the CSS classes
 * @props {(code: string, password: string) => void} [onClick] - onClick handler launching after submit form
 * @props {string} [apiError] - api error messages
 */

export interface IConfirmationCodeProps {
  className?: string
  onClick?: (code: string) => void
  apiError?: string
}

/**
 * Renders the confirmation component
 *
 * @param  {string} [className] - the CSS classes
 * @param  {(code: string) => void} [onClick] - onClick handler launching after submit form
 * @param  {string} [apiError] - api error messages
 *
 * @example
 * <ConfirmationCode
 *  className='a6y-react-auth__forgot-password'
 *  onClick={onClick}
 * />
 */

const ConfirmationCode = ({
  className = 'a6y-react-auth__sign-up',
  onClick,
  apiError,
}: IConfirmationCodeProps): JSX.Element => {
  const [code, setCode] = useState('')
  const [errorData, setErrorData] = useState(false)
  const classNames = require('classnames')

  const FormClassCode = classNames({
    [`${className + '__form'}--error`]: errorData ? true : false,
  })

  const onInputChange = (e: { target: { value: string } }) => {
    setErrorData(e.target.value.length === 0)
    setCode(e.target.value)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.stopPropagation()
    e.preventDefault()
    const data = [
      {
        value: code,
        rules: ['CANNOT_BE_BLANK'],
      },
    ]
    if (onClick && validate(data)) {
      onClick(code)
    } else {
      if (!errorData) setErrorData(true)
    }
  }

  return (
    <div className={className + '__confirmation-code'}>
      <h1>
        {globalThis.A6YReactAuthConfig &&
        globalThis.A6YReactAuthConfig.components?.forgotPasswordSubmit?.title
          ? globalThis.A6YReactAuthConfig.components?.forgotPasswordSubmit
              ?.title
          : 'Confirmation Code'}
      </h1>
      <ErrorBoundary showError={apiError ? true : false}>
        {apiError}
      </ErrorBoundary>
      <form className={`${className}`} onSubmit={e => onSubmit(e)}>
        <div className={`${className}-group ${FormClassCode}`}>
          <Input
            id='confirm-password'
            typeInput='password'
            placeholder='Confirm password'
            label=''
            onChange={e => onInputChange(e)}
            value={code}
          />
        </div>
      </form>
    </div>
  )
}

export default ConfirmationCode

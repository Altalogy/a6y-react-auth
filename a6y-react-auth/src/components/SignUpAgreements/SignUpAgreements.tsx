import React from 'react'
import Checkbox from '../UI/Checkbox/Checkbox'

/**
 * @typedef ISignUpProps
 * @props {string} [value] - value of checkbox
 * @props {(e: React.ChangeEvent<HTMLInputElement>) => void} [onChange] - on event handler
 */

export interface IAgreements {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}

/**
 * Renders the sign-up component
 *
 * @params {string} [value] - value of checkbox
 * @params {(e: React.ChangeEvent<HTMLInputElement>) => void} [onChange] - on event handler
 *
 * @example
 * <SignUpAgreements
 *  value='true'
 *  onClick={() => onChange)}
 * />
 */

const SignUpAgreements = ({ onChange, value }: IAgreements): JSX.Element => {
  return (
    <Checkbox
      id='conditions'
      onChange={onChange}
      placeholder='...'
      value={value}
    >
      <>
        I have read and agree the{' '}
        {globalThis.A6YReactAuthConfig &&
          globalThis.A6YReactAuthConfig.components?.signUp?.privacy && (
            <a
              href={
                globalThis.A6YReactAuthConfig &&
                globalThis.A6YReactAuthConfig.components?.signUp?.privacyUrl
                  ? globalThis.A6YReactAuthConfig.components?.signUp?.privacyUrl
                  : 'privacy-policy'
              }
            >
              privacy policy
              {globalThis.A6YReactAuthConfig &&
                globalThis.A6YReactAuthConfig.components?.signUp?.terms &&
                ','}
            </a>
          )}
        {globalThis.A6YReactAuthConfig &&
          globalThis.A6YReactAuthConfig.components?.signUp?.terms && (
            <a
              href={
                globalThis.A6YReactAuthConfig &&
                globalThis.A6YReactAuthConfig.components?.signUp?.termsUrl
                  ? globalThis.A6YReactAuthConfig.components?.signUp?.termsUrl
                  : 'service-terms'
              }
            >
              service of terms
            </a>
          )}
      </>
    </Checkbox>
  )
}

export default SignUpAgreements

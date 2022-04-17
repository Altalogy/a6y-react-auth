import React, { useEffect, useState } from 'react'
import Checkbox from '../UI/Checkbox/Checkbox'

/**
 * @typedef IConsents
 * @props {(value: boolean) => void} [isValid] - function validation for required fields with callback true or false
 */

export interface IConsents {
  isValid?: (valid: boolean, consentsValues: IValues) => void
  className?: string
  consentsLabelStyle?: string
  consentsHrefStyle?: string
  consentInputLabelStyle?: string
  consentInputStyle?: string
  consentTextStyle?: string
  consentSpanStyle?: string
}

/**
 * @typedef IConsent
 * @props {string} [type] - type of consent element. 'checkbox' or 'other'
 * @props {boolean} [required] - field required for validation
 * @props {string} content - the content of label with keywords for links.
 */

export interface IConsent {
  name?: string
  type?: string
  required?: boolean
  content: string | JSX.Element
  isElement?: boolean
  value?: boolean
}

/**
 * @typedef IValues
 * @props {number} [key:string] - type of value key in object of values
 */

export interface IValues {
  [key: number]: boolean
}

/**
 * Renders the consents component from config
 * @params {(value: boolean) => void} [isValid] - function validation for required fields with callback true or false
 *
 * @example
 * <Consents />
 */

const Consents = ({
  isValid,
  className = 'a6y-react-auth__consents',
  consentsLabelStyle = `a6y-react-auth__checkbox-label--without-input`,
  consentsHrefStyle = '',
  consentInputLabelStyle = '',
  consentInputStyle = '',
  consentTextStyle = '',
  consentSpanStyle = '',
}: IConsents): JSX.Element => {
  const [consents, setConsents] = useState<IConsent[]>([])
  const [required] = useState<number[]>(() => getRequired())
  const [values, setValues] = useState<IValues>({})
  useEffect(() => {
    const consentsData =
      globalThis.A6YReactAuthConfig &&
      globalThis.A6YReactAuthConfig.components &&
      globalThis.A6YReactAuthConfig.components.consents &&
      globalThis.A6YReactAuthConfig.components.consents.consents
    if (Array.isArray(consentsData)) {
      setConsents(consentsData)
    }
    validate()
  }, [])

  useEffect(() => {
    validate()
  }, [values])

  function getRequired() {
    const consentsData =
      globalThis.A6YReactAuthConfig &&
      globalThis.A6YReactAuthConfig.components &&
      globalThis.A6YReactAuthConfig.components.consents &&
      globalThis.A6YReactAuthConfig.components.consents.consents
    const newRequired: number[] = []
    if (Array.isArray(consentsData)) {
      consentsData.map((consent: IConsent, idx) => {
        if (consent.type === 'checkbox' && consent.required) {
          newRequired.push(idx)
        }
      })
    }
    return newRequired
  }

  function validate() {
    const notCheckedButRequired = []
    const valuesKeys = Object.keys(values)
    required.map((value: number) => {
      if (valuesKeys.includes(`${value}`) && !values[value]) {
        notCheckedButRequired.push(value)
      } else if (!valuesKeys.includes(`${value}`)) {
        notCheckedButRequired.push(value)
      }
    })
    if (isValid) isValid(notCheckedButRequired.length === 0, values)
  }

  function getLabel(content: string | JSX.Element, isElement?: boolean) {
    if (isElement) {
      return content
    }
    const linkRgx = /\(.*?\)\[.*?\]/
    const matchRgx = /\((.*?)\)\[(.*?)\]/
    const arrayOfContent = (content as string).split(' ')
    return (
      <>
        {arrayOfContent.map(el => {
          if (linkRgx.test(el)) {
            const new_el = el.split('_').join(' ')
            const match = new_el.match(matchRgx)
            return (
              <a className={consentsHrefStyle} href={match ? match[2] : ''}>
                {match && match[1] + ' '}
              </a>
            )
          } else {
            return el + ' '
          }
        })}
      </>
    )
  }

  const renderConsentsElements = () => {
    const rendersElements: JSX.Element[] = []
    consents.map((consent: IConsent, idx) => {
      if (consent.type === 'checkbox') {
        rendersElements.push(
          <Checkbox
            labelStyle={consentInputLabelStyle}
            inputStyle={consentInputStyle}
            textStyle={consentTextStyle}
            spanStyle={consentSpanStyle}
            id={`consent-${idx}`}
            onChange={e => setValues({ ...values, [idx]: e.target.checked })}
            value={`${values[idx]}`}
          >
            {getLabel(consent.content, consent.isElement)}
          </Checkbox>,
        )
      } else {
        rendersElements.push(
          <label className={consentsLabelStyle}>
            {getLabel(consent.content, consent.isElement)}
          </label>,
        )
      }
    })
    return rendersElements
  }
  return (
    <div className={className}>
      {consents.length > 0 && renderConsentsElements()}
    </div>
  )
}

export default Consents

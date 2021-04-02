import React, { useEffect, useState } from 'react'
import Checkbox from '../UI/Checkbox/Checkbox'

/**
 * @typedef IConsents
 * @props {(value: boolean) => void} [isValid] - function validation for required fields with callback true or false
 */

export interface IConsents {
  isValid?: (value: boolean) => void
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
  type?: string
  required?: boolean
  content: string
}

/**
 * @typedef IValues
 * @props {string} [key:string] - type of value key in object of values
 */

interface IValues {
  [key: string]: boolean
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
  const [required] = useState<string[]>([])
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
  }, [])

  useEffect(() => {
    const validation = []
    const valuesKeys = Object.keys(values)
    required.map(value => {
      if (valuesKeys.includes(value) && !values[value]) {
        validation.push(value)
      } else if (!valuesKeys.includes(value)) {
        validation.push(value)
      }
    })
    if (isValid) isValid(validation.length > 0 ? false : true)
  }, [values])

  function getLabel(content: string) {
    const linkRgx = /\(.*?\)\[.*?\]/
    const matchRgx = /\((.*?)\)\[(.*?)\]/
    const arrayOfContent = content.split(' ')
    return (
      <>
        {arrayOfContent.map(el => {
          if (linkRgx.test(el)) {
            const match = el.match(matchRgx)
            return (
              <a className={consentsHrefStyle} href={match ? match[2] : ''}>
                {match && match[1]}
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
        if (consent.required) {
          required.push(`consent${idx}`)
        }
        rendersElements.push(
          <Checkbox
            labelStyle={consentInputLabelStyle}
            inputStyle={consentInputStyle}
            textStyle={consentTextStyle}
            spanStyle={consentSpanStyle}
            id={`consent-${idx}`}
            onChange={e =>
              setValues({ ...values, [`consent${idx}`]: e.target.checked })
            }
            value={`${values[`consent${idx}`]}`}
          >
            {getLabel(consent.content)}
          </Checkbox>,
        )
      } else {
        rendersElements.push(
          <label className={consentsLabelStyle}>
            {getLabel(consent.content)}
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

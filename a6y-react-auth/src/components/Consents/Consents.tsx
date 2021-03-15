import React, { useEffect, useState } from 'react'
import Checkbox from '../UI/Checkbox/Checkbox'

/**
 * @typedef IConsents
 * @props {(value: boolean) => void} [isValid] - function validation for required fields with callback true or false
 */

export interface IConsents {
  isValid?: (value: boolean) => void
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

const Consents = ({ isValid }: IConsents): JSX.Element => {
  const [consents, setConsents] = useState<IConsent[]>([])
  const [required] = useState<string[]>([])
  const [values, setValues] = useState<IValues>({})
  useEffect(() => {
    const consentsData =
      globalThis.A6YReactAuthConfig &&
      globalThis.A6YReactAuthConfig.components &&
      globalThis.A6YReactAuthConfig.components.consents
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
            return <a href={match ? match[2] : ''}>{match && match[1]}</a>
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
          <label className={`a6y-react-auth__checkbox-label--without-input`}>
            {getLabel(consent.content)}
          </label>,
        )
      }
    })
    return rendersElements
  }
  return (
    <div className='a6y-react-auth__consents'>
      {consents.length > 0 && renderConsentsElements()}
    </div>
  )
}

export default Consents

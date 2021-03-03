import React from 'react'
import { render } from '@testing-library/react'
import { ErrorBoundary } from '../../components/UI'

const ErrorText = 'Error message'
const ErrorChild = <div className='custom-class'>{ErrorText}</div>

describe(`Component:ErrorBoundary test`, () => {
  it('renders with status [false]', () => {
    const rendered = render(
      <ErrorBoundary showError={false}>{ErrorText}</ErrorBoundary>,
    )
    expect(rendered).toBeDefined
  })
  it('renders with status [true]', () => {
    const rendered = render(
      <ErrorBoundary showError={true}>{ErrorText}</ErrorBoundary>,
    )
    expect(rendered).toBeDefined
  })
  it('renders with status [true] and with H1 tag', () => {
    const rendered = render(
      <ErrorBoundary showError={true}>
        <h1>{ErrorText}</h1>
      </ErrorBoundary>,
    )
    expect(rendered).toBeDefined
  })
  it('renders with status [true] and with react child', () => {
    const rendered = render(
      <ErrorBoundary showError={true}>{ErrorChild}</ErrorBoundary>,
    )
    expect(rendered).toBeDefined
  })
})

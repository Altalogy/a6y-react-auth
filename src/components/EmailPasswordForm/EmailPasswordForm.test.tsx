import React from 'react'
import { render } from '@testing-library/react'
import EmailPasswordForm from './EmailPasswordForm'

describe(`button component test`, () => {
  it('form links instance rendered properly', () => {
    const rendered = render(<EmailPasswordForm />)
    expect(rendered).toBeDefined
  })
})

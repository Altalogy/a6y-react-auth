import React from 'react'
import { render } from '@testing-library/react'
import EmailPasswordForm from './EmailPasswordForm'

describe(`EmailPasswordForm component test`, () => {
  it('form component rendered properly', () => {
    const rendered = render(<EmailPasswordForm />)
    expect(rendered).toBeDefined
  })
})

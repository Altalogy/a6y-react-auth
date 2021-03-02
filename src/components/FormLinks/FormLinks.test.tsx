import React from 'react'
import { render } from '@testing-library/react'
import FormLinks from './FormLinks'

describe(`button component test`, () => {
  it('form links instance rendered properly', () => {
    const rendered = render(<FormLinks />)
    expect(rendered).toBeDefined
  })
})
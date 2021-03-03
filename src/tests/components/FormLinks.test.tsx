import React from 'react'
import { render } from '@testing-library/react'
import FormLinks from '../../components/FormLinks'

describe(`FormLinks component test`, () => {
  it('form links instance rendered properly', () => {
    const rendered = render(<FormLinks />)
    expect(rendered).toBeDefined
  })
})

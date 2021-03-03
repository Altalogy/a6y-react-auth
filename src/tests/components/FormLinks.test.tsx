import React from 'react'
import { render } from '@testing-library/react'
import FormLinks from '../../components/FormLinks'

describe(`Component:FormLinks test`, () => {
  it('renders without crashing', () => {
    const rendered = render(<FormLinks />)
    expect(rendered).toBeDefined
  })
})

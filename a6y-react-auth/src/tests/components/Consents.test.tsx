import React from 'react'
import { render } from '@testing-library/react'
import Consents from '../../components/Consents'

describe(`Component:Consents test`, () => {
  it('renders without crashing', () => {
    const rendered = render(<Consents />)
    expect(rendered).toBeDefined
  })
})

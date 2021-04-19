import React from 'react'
import { render } from '@testing-library/react'
import ConfirmationCode from '../../components/ConfirmationCode'

describe(`Component:ConfirmationCode test`, () => {
  it('renders without crashing', () => {
    const rendered = render(<ConfirmationCode />)
    expect(rendered).toBeDefined
  })
})

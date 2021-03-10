import React from 'react'
import { render } from '@testing-library/react'
import ForgotPassword from '../../components/ForgotPassword'

describe(`Component:ForgotPassword test`, () => {
  it('renders without crashing', () => {
    const rendered = render(<ForgotPassword />)
    expect(rendered).toBeDefined
  })
})

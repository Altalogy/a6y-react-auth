import React from 'react'
import { render } from '@testing-library/react'
import ForgotPasswordSubmit from '../../components/ForgotPassword/ForgotPasswordSubmit'

describe(`Component:ForgotPasswordSubmit test`, () => {
  it('renders without crashing', () => {
    const rendered = render(<ForgotPasswordSubmit />)
    expect(rendered).toBeDefined
  })
})

import React from 'react'
import { render } from '@testing-library/react'
import EmailPasswordForm from '../../components/EmailPasswordForm'

describe(`Component:EmailPasswordForm test`, () => {
  it('renders without crashing', () => {
    const rendered = render(<EmailPasswordForm />)
    expect(rendered).toBeDefined
  })
})

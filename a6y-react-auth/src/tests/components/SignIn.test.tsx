import React from 'react'
import { render } from '@testing-library/react'
import SignIn from '../../components/SignIn'

describe(`Component:SignIn test`, () => {
  it('renders without crashing', () => {
    const rendered = render(<SignIn />)
    expect(rendered).toBeDefined
  })
})

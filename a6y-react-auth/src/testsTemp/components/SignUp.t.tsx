import React from 'react'
import { render } from '@testing-library/react'
import SignUp from '../../components/SignUp'

describe(`Component:SignUp test`, () => {
  it('renders without crashing', () => {
    const rendered = render(<SignUp />)
    expect(rendered).toBeDefined
  })
})

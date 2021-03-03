import React from 'react'
import { render } from '@testing-library/react'
import SignUp from './SignUp'

describe(`signUp component test`, () => {
  it('component rendered properly', () => {
    const rendered = render(<SignUp />)
    expect(rendered).toBeDefined
  })
})

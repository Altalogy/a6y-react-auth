import React from 'react'
import { render } from '@testing-library/react'
import SignIn from './SignIn'

describe(`signIn component test`, () => {
  it('component rendered properly', () => {
    const rendered = render(<SignIn />)
    expect(rendered).toBeDefined
  })
})

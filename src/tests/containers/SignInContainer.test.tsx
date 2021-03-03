import React from 'react'
import { render } from '@testing-library/react'
import SignInContainer from '../../containers/SignInContainer'

describe(`signIn container test`, () => {
  it('container with component rendered properly', () => {
    const rendered = render(<SignInContainer />)
    expect(rendered).toBeDefined
  })
})

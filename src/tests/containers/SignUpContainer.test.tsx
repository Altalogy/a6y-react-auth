import React from 'react'
import { render } from '@testing-library/react'
import SignUpContainer from '../../containers/SignUpContainer'

describe(`signUp container test`, () => {
  it('container with component rendered properly', () => {
    const rendered = render(<SignUpContainer />)
    expect(rendered).toBeDefined
  })
})

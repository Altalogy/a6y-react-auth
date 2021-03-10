import React from 'react'
import { render } from '@testing-library/react'
import SignInContainer from '../../containers/SignInContainer'

describe(`Container:SignInContainer test`, () => {
  it('renders without crashing', () => {
    const rendered = render(<SignInContainer />)
    expect(rendered).toBeDefined
  })
})

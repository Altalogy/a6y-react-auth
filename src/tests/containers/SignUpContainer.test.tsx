import React from 'react'
import { render } from '@testing-library/react'
import SignUpContainer from '../../containers/SignUpContainer'

describe(`Container:SignUpContainer test`, () => {
  it('renders without crashing', () => {
    const rendered = render(<SignUpContainer />)
    expect(rendered).toBeDefined
  })
})

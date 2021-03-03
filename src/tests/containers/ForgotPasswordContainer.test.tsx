import React from 'react'
import { render } from '@testing-library/react'
import ForgotPasswordContainer from '../../containers/ForgotPasswordContainer'

describe(`Container:ForgotPasswordContainer test`, () => {
  it('renders without crashing', () => {
    const rendered = render(<ForgotPasswordContainer />)
    expect(rendered).toBeDefined
  })
})

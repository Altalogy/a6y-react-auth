import React from 'react'
import { render } from '@testing-library/react'
import SocialLogin from '../../components/SocialLogin'

describe(`Component:SocialLogin test`, () => {
  it('renders without crashing', () => {
    const rendered = render(
      <SocialLogin callback={response => alert(response)} />,
    )
    expect(rendered).toBeDefined
  })
})

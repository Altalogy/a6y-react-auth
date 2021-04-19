import React from 'react'
import { render } from '@testing-library/react'
import FacebookLogin from '../../components/SocialLogin/components/FacebookLogin'

describe(`Component:Auth test`, () => {
  it('renders without crashing', () => {
    const rendered = render(
      <FacebookLogin appId='00' callback={() => alert()} />,
    )
    expect(rendered).toBeDefined
  })
})

import React from 'react'
import { render } from '@testing-library/react'
import GoogleLogin from '../../components/SocialLogin/components/GoogleLogin'

describe(`Component:Auth test`, () => {
  it('renders without crashing', () => {
    const rendered = render(<GoogleLogin appId='00' callback={() => alert()} />)
    expect(rendered).toBeDefined
  })
})

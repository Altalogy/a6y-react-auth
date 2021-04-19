import React from 'react'
import { render } from '@testing-library/react'
import AuthComponent from '../../components/AuthComponent'

describe(`Component:Auth test`, () => {
  it('renders without crashing', () => {
    const rendered = render(<AuthComponent />)
    expect(rendered).toBeDefined
  })
})

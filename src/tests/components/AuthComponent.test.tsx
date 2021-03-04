import React from 'react'
import { render } from '@testing-library/react'
import AuthComponent from '../../components/AuthComponent'

describe(`Component:Auth test`, () => {
  it('renders sign-in without crashing', () => {
    const rendered = render(
      <AuthComponent config={{ currentForm: 'sign-in' }} />,
    )
    expect(rendered).toBeDefined
  })
  it('renders sign-up without crashing', () => {
    const rendered = render(
      <AuthComponent config={{ currentForm: 'sign-up' }} />,
    )
    expect(rendered).toBeDefined
  })
  it('renders forgot-password without crashing', () => {
    const rendered = render(
      <AuthComponent config={{ currentForm: 'forgot-password' }} />,
    )
    expect(rendered).toBeDefined
  })
})

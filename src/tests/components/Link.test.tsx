import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { Link } from '../../components/UI'

describe(`Component:Link test`, () => {
  it('renders with href', () => {
    const rendered = render(
      <Link to='#' style='custom'>
        Link
      </Link>,
    )
    expect(rendered).toBeDefined
  })
  it('renders with underline prop', () => {
    const rendered = render(
      <Link to='#' underline='hover' style='custom'>
        Link
      </Link>,
    )
    expect(rendered).toBeDefined
  })
  it('renders with click event', () => {
    const handleClick = jest.fn()
    render(
      <Link to='#' onClick={handleClick} style='primary'>
        Link
      </Link>,
    )
    fireEvent.click(screen.getByText(/Link/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})

import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { Link } from '../../components/UI'

describe(`link element test`, () => {
  it('link href instance rendered properly', () => {
    const rendered = render(
      <Link to='#' style='custom'>
        Link
      </Link>,
    )
    expect(rendered).toBeDefined
  })
  it('link href with underline instance rendered properly', () => {
    const rendered = render(
      <Link to='#' underline='hover' style='custom'>
        Link
      </Link>,
    )
    expect(rendered).toBeDefined
  })
  it('link onClick instance rendered properly', () => {
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

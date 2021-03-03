import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { Link } from '../../components/UI'

describe(`link element test`, () => {
  it('link href instance rendered properly', () => {
    const rendered = render(
      <Link to='#' color='custom'>
        Link
      </Link>,
    )
    expect(rendered).toBeDefined
  })
  it('link href with underline instance rendered properly', () => {
    const rendered = render(
      <Link to='#' underline='hover' color='custom'>
        Link
      </Link>,
    )
    expect(rendered).toBeDefined
  })
  it('link onClick instance rendered properly', () => {
    const handleClick = jest.fn()
    render(
      <Link to='#' onClick={handleClick} color='primary'>
        Link
      </Link>,
    )
    fireEvent.click(screen.getByText(/Link/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})

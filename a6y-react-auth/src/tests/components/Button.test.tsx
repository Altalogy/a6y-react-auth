import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from '../../components/UI'

describe(`Component:Button test`, () => {
  it('renders without crashing', () => {
    const rendered = render(
      <Button
        role='button'
        className='primary'
        onClick={e => e}
        style='primary'
      >
        submit
      </Button>,
    )
    expect(rendered).toBeDefined
  })
  it('renders with button click', () => {
    const handleClick = jest.fn()
    render(
      <Button
        role='button'
        className='primary'
        onClick={handleClick}
        style='primary'
      >
        submit
      </Button>,
    )
    fireEvent.click(screen.getByText(/submit/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})

import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from '../../components/UI'

describe(`button component test`, () => {
  it('button instance rendered properly', () => {
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
  it('button click', () => {
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

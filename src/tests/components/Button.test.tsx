import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from '../../components/UI'

describe(`button component test`, () => {
  it('button instance rendered properly', () => {
    const rendered = render(
      <Button
        typeRole='button'
        className='primary'
        onClick={e => e}
        label='submit'
        style='primary'
      />,
    )
    expect(rendered).toBeDefined
  })
  it('button click', () => {
    const handleClick = jest.fn()
    render(
      <Button
        typeRole='button'
        className='primary'
        onClick={handleClick}
        label='submit'
        style='primary'
      />,
    )
    fireEvent.click(screen.getByText(/submit/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})

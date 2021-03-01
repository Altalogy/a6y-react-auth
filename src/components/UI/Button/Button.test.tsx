import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Button from './Button'

describe(`button component test`, () => {
  it('button instance rendered properly', () => {
    const rendered = render(
      <Button type='' classname='primary' onClick={e => e} label='submit' />,
    )
    expect(rendered).toBeDefined
  })
  it('button click', () => {
    const handleClick = jest.fn()
    render(
      <Button
        type=''
        classname='primary'
        onClick={handleClick}
        label='submit'
      />,
    )
    fireEvent.click(screen.getByText(/submit/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})

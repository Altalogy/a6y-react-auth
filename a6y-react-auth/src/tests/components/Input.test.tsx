import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { Input } from '../../components/UI'

describe(`Component:Input test`, () => {
  it('renders without crashing', () => {
    const rendered = render(
      <Input
        id='username'
        className='sign_in'
        onChange={e => e}
        placeholder='e.g. User'
        label=''
        value=''
        typeInput='text'
      />,
    )
    expect(rendered).toBeDefined
  })
  it('should allow input change', () => {
    let value = ''
    const handleChange = (val: string) => {
      return (value = val)
    }
    const { getByPlaceholderText } = render(
      <Input
        id='username'
        className='a6y-react-auth'
        onChange={e => handleChange(e.target.value)}
        placeholder='user'
        label='username'
        value={value}
        typeInput='text'
      />,
    )
    const input = getByPlaceholderText(/user/i)
    fireEvent.change(input, {
      target: { value: 'test' },
    })
    expect(value).toBe('test')
  })
})

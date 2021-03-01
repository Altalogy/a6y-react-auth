import React, { useState } from 'react'
import { Meta } from '@storybook/react'
import Input from '../../src/components/UI/Input/Input'

export const Text: React.VFC<unknown> = () => {
  const [val, setVal] = useState('')
  return (
    <Input
      id='input-text'
      typeInput='text'
      onChange={e => setVal(e.target.value)}
      classNamePrefix='input_story'
      label='input text'
      placeholder='...'
      value={val}
    />
  )
}

export default {
  title: 'Components/Input',
  component: Input,
} as Meta

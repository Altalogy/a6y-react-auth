import React, { useState } from 'react'
import { Meta } from '@storybook/react'
import Checkbox from '../../src/components/UI/Checkbox/Checkbox'

export const Text: React.VFC<unknown> = args => {
  const [val, setVal] = useState('')
  return (
    <Checkbox
      id='input-checkbox'
      onChange={e => setVal(e.target.value)}
      className='input_story'
      placeholder='...'
      value={val}
      {...args}
    >
      Checkbox text
    </Checkbox>
  )
}

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as Meta

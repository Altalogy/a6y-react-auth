import React from 'react'
import { Meta } from '@storybook/react'
import Input from '../../src/components/UI/Input/Input'

export const Text: React.VFC<unknown> = () => (
  <Input
    id='input-text'
    type='text'
    onChange={e => e}
    classNamePrefix='input_story'
    label='input text'
    placeholder='...'
    value=''
  />
)

export default {
  title: 'Components/Input',
  component: Input,
} as Meta

import React from 'react'
import { Meta } from '@storybook/react'
import Button from '../../src/components/UI/Button/Button'

export const Primary: React.VFC<unknown> = args => (
  <Button
    typeRole='button'
    onClick={e => e}
    style={'primary'}
    className='primary'
    label='button'
    {...args}
  />
)

export const Secondary: React.VFC<unknown> = args => (
  <Button
    typeRole='button'
    onClick={e => e}
    style={'secondary'}
    className=''
    label='button'
    {...args}
  />
)

export default {
  title: 'Components/Button',
  component: Button,
} as Meta

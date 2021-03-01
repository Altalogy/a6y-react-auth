import React from 'react'
import { Meta } from '@storybook/react'
import Button from '../../src/components/UI/Button/Button'

export const Primary: React.VFC<unknown> = () => (
  <Button type='button' onClick={e => e} classname='primary' label='button' />
)

export default {
  title: 'Components/Button',
  component: Button,
} as Meta

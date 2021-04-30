import React from 'react'
import { Meta } from '@storybook/react'
import { Loader } from '../../src/components/UI/Loader/Loader'

export const Text: React.VFC<unknown> = () => {
  return <Loader />
}

export default {
  title: 'Components/Loader',
  component: Loader,
} as Meta

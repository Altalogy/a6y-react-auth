import React from 'react'
import { Meta } from '@storybook/react'
import ConfirmationCode from '../../src/components/ConfirmationCode'

export const ConfirmationCodeComponent: React.VFC<unknown> = args => (
  <ConfirmationCode {...args} />
)

export default {
  title: 'Components/ConfirmationCode',
  component: ConfirmationCode,
} as Meta

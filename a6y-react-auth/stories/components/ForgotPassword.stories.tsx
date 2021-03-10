import React from 'react'
import { Meta } from '@storybook/react'
import ForgotPassword from '../../src/components/ForgotPassword'

export const ForgotPasswordComponent: React.VFC<unknown> = args => (
  <ForgotPassword {...args} />
)

export default {
  title: 'Components/ForgotPassword',
  component: ForgotPassword,
} as Meta

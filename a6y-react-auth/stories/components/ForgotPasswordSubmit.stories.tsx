import React from 'react'
import { Meta } from '@storybook/react'
import ForgotPasswordSubmit from '../../src/components/ForgotPassword/ForgotPasswordSubmit'

export const ForgotPasswordSubmitComponent: React.VFC<unknown> = args => (
  <ForgotPasswordSubmit {...args} />
)

export default {
  title: 'Components/ForgotPasswordSubmit',
  component: ForgotPasswordSubmit,
} as Meta

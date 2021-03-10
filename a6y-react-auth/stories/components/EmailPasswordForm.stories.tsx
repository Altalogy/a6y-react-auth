import React from 'react'
import { Meta } from '@storybook/react'
import EmailPasswordForm from '../../src/components/EmailPasswordForm'

export const FormGroup: React.VFC<unknown> = args => (
  <EmailPasswordForm {...args} />
)

export default {
  title: 'Components/EmailPasswordForm',
  component: EmailPasswordForm,
} as Meta

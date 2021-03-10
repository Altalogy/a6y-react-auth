import React from 'react'
import { Meta } from '@storybook/react'
import SignIn from '../../src/components/SignIn'

export const SignInComponent: React.VFC<unknown> = args => <SignIn {...args} />

export default {
  title: 'Components/SignIn',
  component: SignIn,
} as Meta

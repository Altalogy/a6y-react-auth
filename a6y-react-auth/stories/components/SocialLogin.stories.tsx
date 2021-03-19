import React from 'react'
import { Meta } from '@storybook/react'
import SocialLogin from '../../src/components/SocialLogin'

export const SocialLoginComponent: React.VFC<unknown> = args => (
  <SocialLogin {...args} />
)

export default {
  title: 'Components/SocialLogin',
  component: SocialLogin,
} as Meta

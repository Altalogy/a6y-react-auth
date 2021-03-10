import React from 'react'
import { Meta } from '@storybook/react'
import SignUp from '../../src/components/SignUp'

export const SignUpComponent: React.VFC<unknown> = args => <SignUp {...args} />

export default {
  title: 'Components/SignUp',
  component: SignUp,
} as Meta

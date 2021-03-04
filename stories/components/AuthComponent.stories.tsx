import React from 'react'
import { Meta } from '@storybook/react'
import Auth from '../../src/components/AuthComponent'

export const AuthComponent: React.VFC<unknown> = args => (
  <Auth config={{ currentForm: 'sign-in' }} {...args} />
)

export default {
  title: 'Components/Auth',
  component: Auth,
} as Meta

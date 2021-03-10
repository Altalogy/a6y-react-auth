import React from 'react'
import { Meta } from '@storybook/react'
import Link from '../../src/components/UI/Link/Link'

export const LinkComponent: React.VFC<unknown> = args => (
  <Link to='#' {...args}>
    Link
  </Link>
)

export default {
  title: 'Components/Link',
  component: Link,
} as Meta

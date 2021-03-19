import React from 'react'
import { Meta } from '@storybook/react'
import Consents from '../../src/components/Consents'
import A6YReactAuth from '../../'

const A6YAuth = new A6YReactAuth()

export const ConsentsComponent: React.VFC<unknown> = args => {
  A6YAuth.initialize({
    components: {
      consents: [
        {
          type: 'checkbox',
          required: true,
          content: 'example1 (example1-link-title)[example1-url]',
        },
        {
          type: 'other',
          required: false,
          content: 'example2 (example2-link-title)[example2-url]',
        },
      ],
    },
  })
  return <Consents {...args} />
}

export default {
  title: 'Components/Consents',
  component: Consents,
} as Meta

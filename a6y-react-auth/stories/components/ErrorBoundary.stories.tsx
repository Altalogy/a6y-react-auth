import React from 'react'
import { Meta } from '@storybook/react'
import ErrorBoundary from '../../src/components/UI/ErrorBoundary/ErrorBoundary'

export const ErrorBoundaryComponent: React.VFC<unknown> = args => (
  <ErrorBoundary showError={false} {...args}>
    Error message
  </ErrorBoundary>
)

export default {
  title: 'Components/ErrorBoundary',
  component: ErrorBoundary,
} as Meta

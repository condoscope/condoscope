import React, { FC } from 'react'
import { select } from '@storybook/addon-knobs'
import { Spinner } from './Spinner'

export default {
  component: Spinner,
  title: 'Atoms/Spinner',
}

export const regular: FC = () => {
  const appearance = select('Appearance', {
    Basic: 'basic',
    Primary: 'primary',
    Info: 'info',
    Success: 'success',
    Warning: 'warning',
    Danger: 'danger',
  }, 'basic')

  return (
    <div style={{ display: 'grid', rowGap: '1rem' }}>
      <Spinner appearance={appearance} size="tiny" />
      <Spinner appearance={appearance} size="small" />
      <Spinner appearance={appearance} />
      <Spinner appearance={appearance} size="large" />
      <Spinner appearance={appearance} size="giant" />
    </div>
  )
}

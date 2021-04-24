import React, { FC } from 'react'
import { boolean, select } from '@storybook/addon-knobs'
import { Toggle } from './Toggle'

export default {
  component: Toggle,
  title: 'Toggle',
}

export const regular: FC = () => {
  return (
    <Toggle
      htmlId="regular-toggle"
      checked={boolean('Checked', false)}
      appearance={select('Appearance', {
        Basic: 'basic',
        Primary: 'primary',
        Info: 'info',
        Success: 'success',
        Warning: 'warning',
        Danger: 'danger',
      }, 'basic')}
    />
  )
}

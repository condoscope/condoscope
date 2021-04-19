import React, { FC } from 'react'
import { boolean, select, text } from '@storybook/addon-knobs'
import { Checkbox } from './Checkbox'

export default {
  component: Checkbox,
  title: 'Checkbox',
}

export const regular: FC = () => {
  return (
    <Checkbox
      checked={boolean('Checked', false)}
      disabled={boolean('Disabled', false)}
      appearance={select('Appearance', {
        Basic: 'basic',
        Primary: 'primary',
        Info: 'info',
        Success: 'success',
        Warning: 'warning',
        Danger: 'danger',
      }, 'basic')}
    >
      {text('Label', 'Checkbox')}
    </Checkbox>
  )
}

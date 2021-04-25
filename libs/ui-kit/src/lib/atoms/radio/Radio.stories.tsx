import React, { FC } from 'react'
import { boolean, select, text } from '@storybook/addon-knobs'
import { Radio } from './Radio'

export default {
  component: Radio,
  title: 'Atoms/Radio',
}

export const regular: FC = () => {
  return (
    <Radio
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
      {text('Label', 'Label')}
    </Radio>
  )
}

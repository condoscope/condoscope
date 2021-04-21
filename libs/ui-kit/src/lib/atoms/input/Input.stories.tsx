import React, { FC } from 'react'
import { boolean, select, text } from '@storybook/addon-knobs'
import { Input } from './Input'

export default {
  component: Input,
  title: 'Input',
}

export const regular: FC = () => {
  return (
    <Input
      placeholder={text('Placeholder', 'Placeholder')}
      disabled={boolean('Disabled', false)}
      size={select('Size', {
        Small: 'small',
        Medium: 'medium',
        Large: 'large',
      }, 'medium')}
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
    </Input>
  )
}

import React, { FC } from 'react'
import { boolean, text } from '@storybook/addon-knobs'
import { Radio } from './Radio'

export default {
  component: Radio,
  title: 'Radio',
}

export const regular: FC = () => {
  return (
    <Radio
      checked={boolean('Checked', false)}
      disabled={boolean('Disabled', false)}
    >
      {text('Label', 'Label')}
    </Radio>
  )
}

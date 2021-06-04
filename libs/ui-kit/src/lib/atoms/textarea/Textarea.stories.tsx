import React, { FC } from 'react'
import { text } from '@storybook/addon-knobs'
import { Textarea } from './Textarea'

export default {
  title: 'Atoms/Textarea',
  component: Textarea,
}

export const regular: FC = () => {
  return (
    <Textarea placeholder={text('Placeholder', 'Placeholder')}>
      {text('Label', 'Label')}
    </Textarea>
  )
}

export const captionized: FC = () => {
  return (
    <Textarea
      caption={<span>
        {text('Caption', 'Caption')}
      </span>}
      placeholder={text('Placeholder', 'Placeholder')}
    >
      {text('Label', 'Label')}
    </Textarea>
  )
}

import React, { FC } from 'react'
import { text } from '@storybook/addon-knobs'
import { Select } from './Select'

export default {
  component: Select,
  title: 'Atoms/Select',
}

export const regular: FC = () => {
  return (
    <Select placeholder={text('Placeholder', '-')} />
  )
}

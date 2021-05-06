import React, { FC } from 'react'
import { text } from '@storybook/addon-knobs'
import { Select } from './Select'
import { SelectOption } from './types'

export default {
  component: Select,
  title: 'Atoms/Select',
}

export const regular: FC = () => {
  const items: SelectOption[] = [{ key: '1', value: 'first' }, { key: '2', value: 'second' }, { key: '3', value: 'third' }, { key: '4', value: 'fourth' }, { key: '5', value: 'fifth' }, { key: '6', value: 'sixth' }]

  return (
    <Select placeholder={text('Placeholder', '-')} items={items} />
  )
}

import React, { FC } from 'react'
import { text } from '@storybook/addon-knobs'
import { Select } from './Select'
import { SelectOption } from './types'

export default {
  component: Select,
  title: 'Atoms/Select',
}

export const regular: FC = () => {
  const items: SelectOption[] = [{ key: '1', value: 'first' }, { key: '2', value: 'second' }]

  return (
    <Select placeholder={text('Placeholder', '-')} items={items} />
  )
}

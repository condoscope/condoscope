import React, { FC } from 'react'
import { select, text } from '@storybook/addon-knobs'
import { Button } from './Button'

export default {
  component: Button,
  title: 'Atoms/Button',
}

export const filled: FC = () => {
  return (
    <Button size={select('Size', {
      Tiny: 'tiny',
      Small: 'small',
      Medium: 'medium',
      Large: 'large',
      Giant: 'giant',
    }, 'medium')}
    status={select('Color', {
      Basic: 'basic',
      Primary: 'primary',
      Success: 'success',
      Info: 'info',
      Warning: 'warning',
      Danger: 'danger',
    }, 'basic')}
    appearance="filled"
    >
      {text('Label', 'Button')}
    </Button>
  )
}

export const outline: FC = () => {
  return (
    <Button size={select('Size', {
      Tiny: 'tiny',
      Small: 'small',
      Medium: 'medium',
      Large: 'large',
      Giant: 'giant',
    }, 'medium')}
    status={select('Color', {
      Basic: 'basic',
      Primary: 'primary',
      Success: 'success',
      Info: 'info',
      Warning: 'warning',
      Danger: 'danger',
    }, 'basic')}
    appearance="outline"
    >
      {text('Label', 'Button')}
    </Button>
  )
}

export const ghost: FC = () => {
  return (
    <Button size={select('Size', {
      Tiny: 'tiny',
      Small: 'small',
      Medium: 'medium',
      Large: 'large',
      Giant: 'giant',
    }, 'medium')}
    status={select('Color', {
      Basic: 'basic',
      Primary: 'primary',
      Success: 'success',
      Info: 'info',
      Warning: 'warning',
      Danger: 'danger',
    }, 'basic')}
    appearance="ghost"
    >
      {text('Label', 'Button')}
    </Button>
  )
}

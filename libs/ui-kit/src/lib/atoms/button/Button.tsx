import React from 'react'
import { FC, PropsWithChildren } from 'react'
import classes from './Button.module.scss'

type Props = {
  size?: 'giant' | 'large' | 'medium' | 'small' | 'tiny'
  status?: 'basic' | 'primary' | 'success' | 'info' | 'warning' | 'danger'
  appearance?: 'filled' | 'outline' | 'ghost'
}

export const Button: FC<Props> = (props: PropsWithChildren<Props>) => {
  console.log(classes)
  const { children } = props

  return (
    <button className={classes['button']}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  appearance: 'filled',
  status: 'basic',
  size: 'medium',
}

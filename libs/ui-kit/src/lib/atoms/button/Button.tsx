import React from 'react'
import { FC, PropsWithChildren } from 'react'
import classNames from 'classnames'
import styles from './Button.module.scss'

type Props = {
  size?: 'giant' | 'large' | 'medium' | 'small' | 'tiny'
  status?: 'basic' | 'primary' | 'success' | 'info' | 'warning' | 'danger'
  appearance?: 'filled' | 'outline' | 'ghost'
}

export const Button: FC<Props> = (props: PropsWithChildren<Props>) => {
  const { children, size } = props
  const classes = classNames(styles['button'], styles[`button--${size}`])

  return (
    <button className={classes}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  appearance: 'filled',
  status: 'basic',
  size: 'medium',
}

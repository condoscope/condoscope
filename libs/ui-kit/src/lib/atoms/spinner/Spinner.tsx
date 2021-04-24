import React, { FC } from 'react'
import classNames from 'classnames'
import styles from './Spinner.module.scss'

type Props = {
  size?: 'giant' | 'large' | 'medium' | 'small' | 'tiny'
  appearance?: 'basic' | 'primary' | 'info' | 'success' | 'warning' | 'danger'
}

export const Spinner: FC<Props> = (props: Props) => {
  const { appearance, size } = props

  const spinnerClasses = classNames(styles['spinner'], styles[appearance], styles[size])

  return <span className={spinnerClasses} />
}

Spinner.defaultProps = {
  appearance: 'basic',
  size: 'medium',
}

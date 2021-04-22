import React, { FC, PropsWithChildren } from 'react'
import classNames from 'classnames'
import styles from './Radio.module.scss'

type Props = {
  disabled?: boolean
  appearance?: 'basic' | 'primary' | 'info' | 'success' | 'warning' | 'danger'
  checked?: boolean
}

export const Radio: FC<Props> = (props: PropsWithChildren<Props>) => {
  const { disabled, checked, children } = props

  const radioClasses = classNames(styles['radio'])
  const inputClasses = classNames(styles['radio__input'])
  const circleClasses = classNames(styles['radio__circle'])
  const labelClasses = classNames(styles['radio__label'])

  return (
    <label className={radioClasses}>
      <input type="radio" disabled={disabled} checked={checked} className={inputClasses} />
      <span className={circleClasses} />
      <span className={labelClasses}>
        {children}
      </span>
    </label>
  )
}

Radio.defaultProps = {
  disabled: false,
  appearance: 'basic',
  checked: false,
}

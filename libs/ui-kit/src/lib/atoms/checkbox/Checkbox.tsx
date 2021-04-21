import React, { FC, FormEvent, PropsWithChildren } from 'react'
import classNames from 'classnames'
import styles from './Checkbox.module.scss'
import { CheckmarkIcon } from '../icons'
import { noop } from '../../utils'

type Props = {
  disabled?: boolean
  checked?: boolean
  appearance?: 'basic' | 'primary' | 'info' | 'success' | 'warning' | 'danger'
  onChange?: (event: FormEvent<HTMLInputElement>) => void
}

export const Checkbox: FC<Props> = (props: PropsWithChildren<Props>) => {
  const { children, checked, appearance, disabled, onChange } = props

  const groupClasses = classNames(styles['checkbox'])
  const inputClasses = classNames(styles['checkbox__input'])
  const checkmarkBoxClasses = classNames(styles['checkbox__box'], styles[appearance])
  const checkmarkClasses = classNames(styles['checkbox__checkmark'], styles[appearance])
  const labelClasses = classNames(styles['checkbox__label'])

  const checkmark = checked ? <CheckmarkIcon className={checkmarkClasses} /> : null

  return (
    <label className={groupClasses}>
      <input type="checkbox" checked={checked} className={inputClasses} disabled={disabled} onChange={onChange} />
      <span className={checkmarkBoxClasses}>
        {checkmark}
      </span>
      <span className={labelClasses}>
        {children}
      </span>
    </label>
  )
}

Checkbox.defaultProps = {
  disabled: false,
  checked: false,
  appearance: 'basic',
  onChange: noop,
}

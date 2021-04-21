import React, { FC, FormEvent, PropsWithChildren } from 'react'
import classNames from 'classnames'
import styles from './Input.module.scss'
import { noop } from '../../utils'

type Props = {
  disabled?: boolean
  appearance?: 'basic' | 'primary' | 'info' | 'success' | 'warning' | 'danger'
  type?: 'text' | 'email' | 'number'
  readonly?: boolean
  icon?: React.ReactNode
  caption?: React.ReactNode
  placeholder?: string
  size?: 'small' | 'medium' | 'large'
  helpText?: string
  onChange?: (event: FormEvent<HTMLInputElement>) => void
}

export const Input: FC<Props> = (props: PropsWithChildren<Props>) => {
  const { children, type, size, appearance, icon, caption, readonly, disabled, placeholder, helpText, onChange } = props

  const groupClasses = classNames(styles['input'])
  const labelClasses = classNames(styles['input__label'], { [styles['input__label--empty']]: !children })
  const helpClasses = classNames(styles['input__help'])
  const inputWrapperClasses = classNames(styles['input__wrapper'])
  const iconClasses = classNames(styles['input__icon'], styles[size], styles[appearance], { [styles['input__icon--disabled']]: disabled })
  const inputClasses = classNames(styles['input__input'], styles[size], styles[appearance], { [styles['input__input--with-icon']]: Boolean(icon) })
  const captionClasses = classNames(styles['input__caption'], styles[appearance])

  const help = helpText ? (
    <span className={helpClasses}>
      Help
    </span>
  ) : null

  return (
    <div className={groupClasses}>
      <label className={labelClasses}>
        {children || 'Empty label'}
      </label>

      {help}

      <div className={inputWrapperClasses}>
        <input type={type} readOnly={readonly} disabled={disabled} placeholder={placeholder} onChange={onChange} className={inputClasses} />
        <span className={iconClasses}>
          {icon}
        </span>
      </div>

      <span className={captionClasses}>
        {caption}
      </span>
    </div>
  )
}

Input.defaultProps = {
  disabled: false,
  appearance: 'basic',
  type: 'text',
  readonly: false,
  icon: null,
  caption: null,
  placeholder: '',
  size: 'medium',
  helpText: '',
  onChange: noop,
}

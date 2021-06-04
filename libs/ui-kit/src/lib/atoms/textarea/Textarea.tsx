import React, { FC, PropsWithChildren } from 'react'
import classNames from 'classnames'
import styles from './Textarea.module.scss'

type Props = {
  disabled?: boolean
  appearance?: 'basic' | 'primary' | 'info' | 'success' | 'warning' | 'danger'
  helpText?: string
  placeholder?: string
  caption?: React.ReactNode
}

export const Textarea: FC<Props> = (props: PropsWithChildren<Props>) => {
  const { children, helpText, placeholder, caption } = props

  const groupClasses = classNames(styles['textarea'])
  const labelClasses = classNames(styles['textarea__label'])
  const helpClasses = classNames(styles['textarea__help'])
  const fieldClasses = classNames(styles['textarea__field'])
  const captionClasses = classNames(styles['textarea__caption'])

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

      <textarea placeholder={placeholder} className={fieldClasses} />

      <span className={captionClasses}>
        {caption}
      </span>
    </div>
  )
}

Textarea.defaultProps = {
  disabled: false,
  appearance: 'basic',
  helpText: '',
  placeholder: '',
  caption: null,
}

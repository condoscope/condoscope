import React, { FC, PropsWithChildren } from 'react'
import classNames from 'classnames'
import styles from './Select.module.scss'
import { ChevronIcon } from '../icons'

type Props = {
  appearance?: 'basic' | 'primary' | 'info' | 'success' | 'warning' | 'danger'
  placeholder?: string
}

export const Select: FC<Props> = (props: PropsWithChildren<Props>) => {
  const { appearance, placeholder } = props

  const groupClasses = classNames(styles['select__group'])
  const selectedClasses = classNames(styles['select__selected'], styles[appearance])
  const chevronClasses = classNames(styles['select__chevron'])
  const listClasses = classNames(styles['select__list'])
  const optionClasses = classNames(styles['select__option'])
  const optionInputClasses = classNames(styles['select__input'])

  return (
    <details className={groupClasses}>
      <summary className={selectedClasses}>
        {placeholder}
        <ChevronIcon className={chevronClasses} />
      </summary>
      <div className={listClasses}>
        <label className={optionClasses}>
          <input type="radio" className={optionInputClasses} />
          First
        </label>
        <label className={optionClasses}>
          <input type="radio" className={optionInputClasses} />
          Second
        </label>
      </div>
    </details>
  )
}

Select.defaultProps = {
  appearance: 'basic',
  placeholder: '--',
}

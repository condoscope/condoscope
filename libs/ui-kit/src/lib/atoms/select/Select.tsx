import React, { FC, PropsWithChildren } from 'react'
import classNames from 'classnames'
import styles from './Select.module.scss'
import { ChevronIcon } from '../icons'

type Props = {
  appearance?: 'basic' | 'primary' | 'info' | 'success' | 'warning' | 'danger'
}

export const Select: FC<Props> = (props: PropsWithChildren<Props>) => {
  const { appearance } = props

  const groupClasses = classNames(styles['select__group'])
  const selectedClasses = classNames(styles['select__selected'], styles[appearance])
  const chevronClasses = classNames(styles['select__chevron'])

  return (
    <details className={groupClasses}>
      <summary className={selectedClasses}>
        Option 1
        <ChevronIcon className={chevronClasses} />
      </summary>
    </details>
  )
}

Select.defaultProps = {
  appearance: 'basic',
}

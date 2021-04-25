import React, { FC, PropsWithChildren } from 'react'
import classNames from 'classnames'
import styles from './Select.module.scss'
import { ChevronIcon } from '../icons'

type Props = {
  appearance?: 'basic' | 'primary' | 'info' | 'success' | 'warning' | 'danger'
}

export const Select: FC<Props> = (props: PropsWithChildren<Props>) => {
  const { appearance } = props

  const selectedClasses = classNames(styles['select__selected'], styles[appearance])
  const chevronClasses = classNames(styles['select__chevron'])

  return (
    <details>
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

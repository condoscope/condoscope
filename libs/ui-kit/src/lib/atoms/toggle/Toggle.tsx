import React, { FC, PropsWithChildren } from 'react'
import classNames from 'classnames'
import styles from './Toggle.module.scss'
import { CheckmarkIcon } from '../icons'

type Props = {
  appearance?: 'basic' | 'primary' | 'info' | 'success' | 'warning' | 'danger'
  checked?: boolean
  htmlId: string
}

export const Toggle: FC<Props> = (props: PropsWithChildren<Props>) => {
  const { checked, htmlId, appearance } = props

  const wrapperClasses = classNames(styles['toggle'])
  const buttonClasses = classNames(styles['toggle__button'], styles[appearance], { [styles['checked']]: checked })
  const switchClasses = classNames(styles['toggle__switch'], { [styles['checked']]: checked })
  const checkmarkClasses = classNames(styles['toggle__checkmark'])

  const checkmark = checked ? (
    <span className={checkmarkClasses}>
      <CheckmarkIcon />
    </span>
  ) : null

  return (
    <label htmlFor={htmlId} className={wrapperClasses}>
      <button id={htmlId} type="button" role="switch" aria-checked={checked} className={buttonClasses}>
        <span className={switchClasses}>
          {checkmark}
        </span>
      </button>
    </label>
  )
}

Toggle.defaultProps = {
  appearance: 'basic',
  checked: false,
}

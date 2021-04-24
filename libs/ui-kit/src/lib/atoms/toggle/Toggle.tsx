import React, { FC, PropsWithChildren } from 'react'
import classNames from 'classnames'
import styles from './Toggle.module.scss'

type Props = {
  checked?: boolean
  htmlId: string
}

export const Toggle: FC<Props> = (props: PropsWithChildren<Props>) => {
  const { checked, htmlId } = props

  const wrapperClasses = classNames(styles['toggle'])

  return (
    <label htmlFor={htmlId} className={wrapperClasses}>
      <button id={htmlId} type="button" role="switch" aria-checked={checked} />
    </label>
  )
}

Toggle.defaultProps = {
  checked: false,
}

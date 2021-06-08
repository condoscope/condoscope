import { FC, PropsWithChildren } from 'react'
import classNames from 'classnames'
import styles from './Title.module.scss'
import { Styled } from '../../types'

type Props = {
  size?: 1 | 2 | 3 | 4 | 5 | 6
  text?: string
} & Styled

export const Title: FC<Props> = (props: PropsWithChildren<Props>) => {
  const { size, text, className, children } = props
  const content = text || children
  const titleClasses = classNames(styles['title'], className)

  switch (size) {

  case 1: return (
    <h6 className={titleClasses}>
      {content}
    </h6>
  )

  case 2: return (
    <h5 className={titleClasses}>
      {content}
    </h5>
  )

  case 3: return (
    <h4 className={titleClasses}>
      {content}
    </h4>
  )

  case 4: return (
    <h3 className={titleClasses}>
      {content}
    </h3>
  )

  case 5: return (
    <h2 className={titleClasses}>
      {content}
    </h2>
  )

  case 6: return (
    <h1 className={titleClasses}>
      {content}
    </h1>
  )

  default: return (
    <h3 className={titleClasses}>
      {content}
    </h3>
  )

  }
}

Title.defaultProps = {
  size: 3,
  text: null,
}

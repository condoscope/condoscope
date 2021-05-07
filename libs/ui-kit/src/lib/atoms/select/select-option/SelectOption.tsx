import React, { FC } from 'react'
import classNames from 'classnames'
import styles from './SelectOption.module.scss'
import { SelectValue } from '../types'

type Props = {
  selected: SelectValue
  option: SelectValue
  onSelect: (option: SelectValue) => void
}

export const SelectOption: FC<Props> = (props: Props) => {
  const { option, selected, onSelect } = props
  const isSelected = selected?.key === option.key

  const itemClasses = classNames(styles['option__item'], { [styles['selected']]: isSelected })

  const handleClick = () => {
    onSelect(option)
  }

  return (
    <li>
      <button onClick={handleClick} className={itemClasses} role="option" aria-selected={isSelected}>
        {option.value}
      </button>
    </li>
  )
}

SelectOption.defaultProps = {
  selected: null,
}

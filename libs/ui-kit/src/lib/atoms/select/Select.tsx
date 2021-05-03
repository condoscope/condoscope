import React, { FC, PropsWithChildren, useRef, useState } from 'react'
import classNames from 'classnames'
import styles from './Select.module.scss'
import { ChevronIcon } from '../icons'
import { useClickOutside } from '../../hooks'

type Props = {
  appearance?: 'basic' | 'primary' | 'info' | 'success' | 'warning' | 'danger'
  placeholder?: string
  items?: { key: string; value: string }[]
  label?: string
}

export const Select: FC<Props> = (props: PropsWithChildren<Props>) => {
  const { appearance, placeholder, items } = props
  const selectRef = useRef<HTMLDivElement>()
  const [open, setOpen] = useState(false)

  const handleClick = (): void => {
    setOpen((isOpen) => !isOpen)
  }

  useClickOutside(selectRef, () => {
    setOpen(false)
  }, [])

  const groupClasses = classNames(styles['select__group'])
  const selectedClasses = classNames(styles['select__selected'], styles[appearance])
  const chevronClasses = classNames(styles['select__chevron'], { [styles['open']]: open })
  const listClasses = classNames(styles['select__list'])
  const optionClasses = classNames(styles['select__option'])
  const optionInputClasses = classNames(styles['select__input'])

  const options = items.map((item) => (
    <li key={item.key} className={optionClasses}>
      <input type="radio" className={optionInputClasses} />
      {item.value}
    </li>
  ))

  const list = items.length > 0 && open ? (
    <ul className={listClasses}>
      {options}
    </ul>
  ) : null

  return (
    <div className={groupClasses}>
      <button className={selectedClasses} onClick={handleClick} aria-expanded={open} aria-haspopup="true">
        {placeholder}
        <ChevronIcon className={chevronClasses} />
      </button>
      {list}
    </div>
  )
}

Select.defaultProps = {
  appearance: 'basic',
  placeholder: '--',
  items: [],
  label: '',
}

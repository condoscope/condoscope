import React, { FC, PropsWithChildren, useRef, useState } from 'react'
import classNames from 'classnames'
import styles from './Select.module.scss'
import { SelectOption } from './types'
import { ChevronIcon } from '../icons'
import { useClickOutside } from '../../hooks'

type Props = {
  appearance?: 'basic' | 'primary' | 'info' | 'success' | 'warning' | 'danger'
  placeholder?: string
  items?: SelectOption[]
  label?: string
}

export const Select: FC<Props> = (props: PropsWithChildren<Props>) => {
  const { appearance, placeholder, items } = props
  const selectRef = useRef<HTMLDivElement>()
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<SelectOption>(null)

  const handleClick = (): void => {
    setOpen((isOpen) => !isOpen)
  }

  const handleSelect = (option: SelectOption): void => {
    setOpen(false)
    setSelected(option)
  }

  useClickOutside(selectRef, () => {
    setOpen(false)
  }, [])

  const groupClasses = classNames(styles['select__group'])
  const selectedClasses = classNames(styles['select__selected'], styles[appearance])
  const chevronClasses = classNames(styles['select__chevron'], { [styles['open']]: open })
  const listClasses = classNames(styles['select__list'])
  const optionClasses = classNames(styles['select__option'])
  const itemClasses = classNames(styles['select__item'])

  const options = items.map((item) => (
    <li key={item.key} className={optionClasses}>
      <button onClick={() => handleSelect(item)} className={itemClasses} role="option" aria-selected="false">
        {item.value}
      </button>
    </li>
  ))

  const list = items.length > 0 && open ? (
    <ul className={listClasses}>
      {options}
    </ul>
  ) : null

  return (
    <div ref={selectRef} className={groupClasses}>
      <button className={selectedClasses} onClick={handleClick} aria-expanded={open} aria-haspopup="listbox">
        {selected?.value || placeholder}
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

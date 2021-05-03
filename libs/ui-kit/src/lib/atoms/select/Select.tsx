import React, { FC, PropsWithChildren, useEffect, useRef } from 'react'
import classNames from 'classnames'
import styles from './Select.module.scss'
import { ChevronIcon } from '../icons'

type Props = {
  appearance?: 'basic' | 'primary' | 'info' | 'success' | 'warning' | 'danger'
  placeholder?: string
  items?: { key: string; value: string }[]
}

export const Select: FC<Props> = (props: PropsWithChildren<Props>) => {
  const { appearance, placeholder, items } = props
  const selectRef = useRef<HTMLDetailsElement>()

  const groupClasses = classNames(styles['select__group'])
  const selectedClasses = classNames(styles['select__selected'], styles[appearance])
  const chevronClasses = classNames(styles['select__chevron'])
  const listClasses = classNames(styles['select__list'])
  const optionClasses = classNames(styles['select__option'])
  const optionInputClasses = classNames(styles['select__input'])

  const options = items.map((item) => (
    <label key={item.key} className={optionClasses}>
      <input type="radio" className={optionInputClasses} />
      {item.value}
    </label>
  ))

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        // TODO: Add close logic
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <details ref={selectRef} className={groupClasses}>
      <summary className={selectedClasses}>
        {placeholder}
        <ChevronIcon className={chevronClasses} />
      </summary>
      <div className={listClasses}>
        {options}
      </div>
    </details>
  )
}

Select.defaultProps = {
  appearance: 'basic',
  placeholder: '--',
  items: [],
}

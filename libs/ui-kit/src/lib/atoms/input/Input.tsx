import React, { FC, PropsWithChildren } from 'react'

type Props = {
  disabled?: boolean
  appearance?: 'basic' | 'primary' | 'info' | 'success' | 'warning' | 'danger'
  type?: 'text' | 'email' | 'number'
  readonly?: boolean
  icon?: React.ReactNode
  caption?: React.ReactNode
  placeholder?: string
  size?: 'small' | 'medium' | 'large'
}

export const Input: FC<Props> = (props: PropsWithChildren<Props>) => {
  const { children, type, icon, caption, readonly, disabled, placeholder } = props

  return (
    <div>
      <label>
        {children}
      </label>
      <span>
        Help
      </span>

      <div>
        <input type={type} readOnly={readonly} disabled={disabled} placeholder={placeholder} />
        {icon}
      </div>

      {caption}
    </div>
  )
}

Input.defaultProps = {
  disabled: false,
  appearance: 'basic',
  type: 'text',
  readonly: false,
  icon: null,
  caption: null,
  placeholder: '',
  size: 'medium',
}

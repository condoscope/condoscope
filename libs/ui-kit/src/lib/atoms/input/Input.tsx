import React, { FC, PropsWithChildren } from 'react'

type Props = {
  disabled?: boolean
  appearance?: 'basic' | 'primary' | 'info' | 'success' | 'warning' | 'danger'
  type?: 'text' | 'email' | 'number'
  readonly: boolean
  icon?: React.ReactNode
  caption: React.ReactNode
}

export const Input: FC<Props> = (props: PropsWithChildren<Props>) => {
  const { children, type, icon, caption, readonly, disabled } = props

  return (
    <div>
      <label>
        {children}
      </label>
      <span>
        Help
      </span>

      <div>
        <input type={type} readOnly={readonly} disabled={disabled} />
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
}

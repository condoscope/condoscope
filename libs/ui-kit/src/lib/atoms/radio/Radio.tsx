import React, { FC, PropsWithChildren } from 'react'

type Props = {
  disabled?: boolean
}

export const Radio: FC<Props> = (props: PropsWithChildren<Props>) => {
  const { disabled, children } = props

  return (
    <label>
      <input type="radio" disabled={disabled} />
      {children}
    </label>
  )
}

Radio.defaultProps = {
  disabled: false,
}

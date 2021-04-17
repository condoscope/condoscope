import {FC, PropsWithChildren} from "react"

type Props = {
  size: 'giant' | 'large' | 'medium' | 'small' | 'tiny'
  status: 'basic' | 'primary' | 'success' | 'info' | 'warning' | 'danger'
  appearance: 'filled' | 'outline' | 'ghost'
}

export const Button: FC<Props> = (props: PropsWithChildren<Props>) => {
  const { children } = props

  return <button>{children}</button>
}

Button.defaultProps = {
  appearance: 'filled',
  status: 'basic',
  size: 'medium'
}

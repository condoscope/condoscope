import { FC } from 'react'
import { Input } from '@condoscope/ui-kit'
import classNames from 'classnames'
import styles from './LoginForm.module.scss'

export const LoginForm: FC = () => {
  const formClasses = classNames(styles['login-form'])

  return (
    <form className={formClasses}>
      <Input placeholder="E-mail address" type="email">
        Email address
      </Input>

      <Input placeholder="Password" type="password">
        Password
      </Input>
    </form>
  )
}

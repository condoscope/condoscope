import { FC } from 'react'
import { Button, Checkbox, Input } from '@condoscope/ui-kit'
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

      <Checkbox>
        Remember me
      </Checkbox>

      <Button size="large">
        Log In
      </Button>
    </form>
  )
}

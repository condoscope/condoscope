import { FC } from 'react'
import { Input } from '@condoscope/ui-kit'
import classNames from 'classnames'
import styles from './Login.module.scss'

export const Login: FC = () => {
  const pageClasses = classNames(styles['login'])
  const sectionClasses = classNames(styles['login__section'])
  const titleClasses = classNames(styles['login__title'])

  return (
    <main className={pageClasses}>
      <section className={sectionClasses}>
        <h1 className={titleClasses}>
          Login
        </h1>
        <span>
          Hello! Log in with your e-mail
        </span>

        <form>
          <Input placeholder="E-mail address" type="email">
            Email address
          </Input>

          <Input placeholder="Password" type="password">
            Password
          </Input>
        </form>
      </section>
    </main>
  )
}

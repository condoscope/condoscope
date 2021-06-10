import { FC } from 'react'
import { Title } from '@condoscope/ui-kit'
import classNames from 'classnames'
import { LoginForm } from './loginForm'
import styles from './Login.module.scss'
import { LoginOptions } from './loginOptions'

export const Login: FC = () => {
  const pageClasses = classNames(styles['login'])
  const sectionClasses = classNames(styles['login__section'])
  const titleClasses = classNames(styles['login__title'])
  const labelClasses = classNames(styles['login__label'])

  return (
    <main className={pageClasses}>
      <section className={sectionClasses}>
        <Title size={6} text="Login" className={titleClasses} />
        <span className={labelClasses}>
          Hello! Log in with your e-mail
        </span>

        <LoginForm />
        <LoginOptions />
      </section>
    </main>
  )
}

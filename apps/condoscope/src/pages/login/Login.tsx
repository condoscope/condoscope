import { FC } from 'react'
import { Input, Title } from '@condoscope/ui-kit'
import classNames from 'classnames'
import styles from './Login.module.scss'

export const Login: FC = () => {
  const pageClasses = classNames(styles['login'])
  const sectionClasses = classNames(styles['login__section'])
  const formClasses = classNames(styles['login__form'])
  const titleClasses = classNames(styles['login__title'])
  const labelClasses = classNames(styles['login__label'])

  return (
    <main className={pageClasses}>
      <section className={sectionClasses}>
        <Title size={6} text="Login" className={titleClasses} />
        <span className={labelClasses}>
          Hello! Log in with your e-mail
        </span>

        <form className={formClasses}>
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

import classNames from 'classnames'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { FacebookIcon, GoogleIcon } from '@condoscope/ui-kit'
import styles from './LoginOptions.module.scss'

export const LoginOptions: FC = () => {
  const optionsClasses = classNames(styles['login-options'])
  const titleClasses = classNames(styles['login-options__title'])
  const optionsListClasses = classNames(styles['login-options__list'])
  const optionsItemClasses = classNames(styles['login-options__item'])
  const registerWrapperClasses = classNames(styles['login-options__register'])

  return (
    <div className={optionsClasses}>
      <span className={titleClasses}>
        or enter with:
      </span>

      <div className={optionsListClasses}>
        <div className={optionsItemClasses}>
          <FacebookIcon />
        </div>
        <div className={optionsItemClasses}>
          <GoogleIcon />
        </div>
      </div>

      <div className={registerWrapperClasses}>
        Don&apos;t have an account?
        <Link to="/register">
          Register
        </Link>
      </div>
    </div>
  )
}

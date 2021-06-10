import classNames from 'classnames'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { FacebookIcon } from '@condoscope/ui-kit'
import styles from './LoginOptions.module.scss'

export const LoginOptions: FC = () => {
  const optionsClasses = classNames(styles['login-options'])
  const titleClasses = classNames(styles['login-options__title'])
  const registerWrapperClasses = classNames(styles['login-options__register'])

  return (
    <div className={optionsClasses}>
      <span className={titleClasses}>
        or enter with:
      </span>

      <div>
        <FacebookIcon />
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

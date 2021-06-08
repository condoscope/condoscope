import { FC } from 'react'
import { Input } from '@condoscope/ui-kit'

export const Login: FC = () => {
  return (
    <section>
      <h1>
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
  )
}

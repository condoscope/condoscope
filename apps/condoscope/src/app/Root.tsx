import { FC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Login } from '../pages/login'

export const Root: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  )
}

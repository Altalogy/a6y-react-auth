import { Switch } from 'react-router'
import HomeRoute from './home/HomeRoute'
import SignInRoute from './sign-in/SignInRoute'
import SignUpRoute from './sign-up/SignUpRoute'
import ForgotPasswordRoute from './forgot-password/ForgotPasswordRoute'
import LoginRoute from './login/LoginRoute'

interface IRoute {
  component: any
  exact: any
  path: string
}

const NotLoggedInRoute = ({ component: Component, ...rest }: IRoute ) => {
  return <Component {...rest} />
}

const routes = (
  <Switch>
    <NotLoggedInRoute exact path='/' component={HomeRoute} />
    <NotLoggedInRoute exact path='/sign-in' component={SignInRoute} />
    <NotLoggedInRoute exact path='/sign-up' component={SignUpRoute} />
    <NotLoggedInRoute exact path='/login' component={LoginRoute} />
    <NotLoggedInRoute exact path='/forgot-password' component={ForgotPasswordRoute} />
  </Switch>
)

export default routes
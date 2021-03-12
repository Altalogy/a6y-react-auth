import { Switch, Route } from 'react-router-dom'
import HomeRoute from './home/HomeRoute'
import SignInRoute from './sign-in/SignInRoute'
import SignUpRoute from './sign-up/SignUpRoute'
import ForgotPasswordRoute from './forgot-password/ForgotPasswordRoute'
import LoginRoute from './login/LoginRoute'

const routes = (
  <Switch>
    <Route exact path='/' component={HomeRoute} />
    <Route exact path='/sign-in' component={SignInRoute} />
    <Route exact path='/sign-up' component={SignUpRoute} />
    <Route exact path='/login' component={LoginRoute} />
    <Route exact path='/forgot-password' component={ForgotPasswordRoute} />
  </Switch>
)

export default routes
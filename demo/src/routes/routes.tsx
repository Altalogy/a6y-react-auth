import { Switch, Route, Redirect } from 'react-router-dom'
import HomeRoute from './home/HomeRoute'
import SignInRoute from './sign-in/SignInRoute'
import SignUpRoute from './sign-up/SignUpRoute'
import ForgotPasswordRoute from './forgot-password/ForgotPasswordRoute'
import LoginRoute from './login/LoginRoute'
import DashboardRoute from './dashboard/DashboardRoute'

const ProtectedRoute = ({ component: Component, ...rest }: any) => {
  const verified = localStorage.getItem('loggedin')
  if (!verified || verified !== 'yes') {
    return <Redirect to='/' />
  }
  return <Component {...rest} />
}

const NotLoggedIn = ({ component: Component, ...rest }: any) => {
  const verified = localStorage.getItem('loggedin')
  if (verified && verified === 'yes') {
    return <Redirect to='/dashboard' />
  }
  return <Component {...rest} />
}

const routes = (
  <Switch>
    <Route exact path='/' component={HomeRoute} />
    <NotLoggedIn exact path='/sign-in' component={SignInRoute} />
    <NotLoggedIn exact path='/sign-up' component={SignUpRoute} />
    <NotLoggedIn exact path='/login' component={LoginRoute} />
    <Route exact path='/forgot-password' component={ForgotPasswordRoute} />
    <ProtectedRoute path='/dashboard' component={DashboardRoute} />
  </Switch>
)

export default routes
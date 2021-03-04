import React from 'react'
import AuthCnt from './components/AuthComponent'
import SignInCnt from './containers/SignInContainer'
import SignUpCnt from './containers/SignUpContainer'
import ForgotPasswordCnt from './containers/ForgotPasswordContainer'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import ForgotPassword from './components/ForgotPassword'

const A6YReactAuth = {
  // configure: {
  //   provider: {
  //     type: 'cognito',
  //     userPoolId: '',
  //     region: 'eu-central-1',
  //   },
  // },
}

export const Auth = (): JSX.Element => <AuthCnt />
export const SignInContainer = (): JSX.Element => <SignInCnt />
export const SignUpContainer = (): JSX.Element => <SignUpCnt />
export const ForgotPasswordContainer = (): JSX.Element => <ForgotPasswordCnt />

export { SignIn, SignUp, ForgotPassword }

export default A6YReactAuth

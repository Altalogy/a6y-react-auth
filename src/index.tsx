import React from 'react'
import AuthCnt from './components/AuthComponent'
import SignInCnt from './containers/SignInContainer'
import SignUpCnt from './containers/SignUpContainer'
import ForgotPasswordCnt from './containers/ForgotPasswordContainer'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import ForgotPassword from './components/ForgotPassword'
import AuthService from './services/AuthService'

interface IA6YReactAuth {
  provider: {
    type: string
    userPoolId: string
    userPoolWebClientId: string
    region: string
  }
}

declare global {
  // eslint-disable-next-line no-var
  var A6YReactAuthConfig: IA6YReactAuth
}

class A6YReactAuth {
  initialize(config: IA6YReactAuth): void {
    globalThis.A6YReactAuthConfig = config
    new AuthService()
  }
}

export const Auth = (): JSX.Element => <AuthCnt />
export const SignInContainer = (): JSX.Element => <SignInCnt />
export const SignUpContainer = (): JSX.Element => <SignUpCnt />
export const ForgotPasswordContainer = (): JSX.Element => <ForgotPasswordCnt />

export { SignIn, SignUp, ForgotPassword }

export default A6YReactAuth

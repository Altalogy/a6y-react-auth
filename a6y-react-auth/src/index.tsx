/* eslint-disable @typescript-eslint/no-explicit-any */
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
  components?: {
    signUp?: {
      title?: string
      privacy?: boolean
      privacyUrl?: string
      terms?: boolean
      termsUrl?: string
    }
    signIn?: {
      title?: string
    }
    forgotPassword?: {
      title?: string
    }
  }
}

declare global {
  // eslint-disable-next-line no-var
  var A6YReactAuthConfig: IA6YReactAuth
}

interface Ia6yReactAuthParam {
  onSuccess?: (response: unknown) => void
  className?: string
}

class A6YReactAuth {
  initialize(config: IA6YReactAuth): void {
    globalThis.A6YReactAuthConfig = config
    new AuthService()
  }
}

export const Auth = ({
  onSuccess,
  className,
}: Ia6yReactAuthParam): JSX.Element => (
  <AuthCnt
    className={className ? className : undefined}
    onSuccess={onSuccess ? onSuccess : undefined}
  />
)
export const SignInContainer = ({
  onSuccess,
  className,
}: Ia6yReactAuthParam): JSX.Element => (
  <SignInCnt
    className={className ? className : undefined}
    onSuccess={onSuccess ? onSuccess : undefined}
  />
)
export const SignUpContainer = ({
  onSuccess,
  className,
}: Ia6yReactAuthParam): JSX.Element => (
  <SignUpCnt
    className={className ? className : undefined}
    onSuccess={onSuccess ? onSuccess : undefined}
  />
)
export const ForgotPasswordContainer = ({
  onSuccess,
  className,
}: Ia6yReactAuthParam): JSX.Element => (
  <ForgotPasswordCnt
    className={className ? className : undefined}
    onSuccess={onSuccess ? onSuccess : undefined}
  />
)

export { SignIn, SignUp, ForgotPassword }

export default A6YReactAuth

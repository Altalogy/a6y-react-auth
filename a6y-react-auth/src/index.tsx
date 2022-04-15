/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import AuthCnt from './components/AuthComponent'
import { IAuthProps } from './components/AuthComponent/AuthComponent'
import SignInCnt from './containers/SignInContainer'
import { ISignInContainerProps } from './containers/SignInContainer/SignInContainer'
import SignUpCnt from './containers/SignUpContainer'
import { ISignUpContainerProps } from './containers/SignUpContainer/SignUpContainer'
import ForgotPasswordCnt from './containers/ForgotPasswordContainer'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import ForgotPassword from './components/ForgotPassword'
import AuthService from './services/AuthService'
import { IProviderConfig } from './components/SocialLogin/SocialLogin'
import { IConsent } from './components/Consents/Consents'

interface IA6YReactAuth {
  provider: {
    type: string
    userPoolId: string
    userPoolWebClientId: string
    identityPoolId: string
    region: string
    oauthDomain: string
    oauthRedirectSignIn: string
    oauthRedirectSignOut: string
  }
  auth?: IProviderConfig[]
  components?: {
    Inputs?: {
      labels?: boolean
    }
    signUp?: {
      title?: string
      headerComponent?: React.ReactNode
      linksComponent?: {
        display?: 'forgot-password' | 'sign-in' | 'both'
        linkText01?: string
        linkText02?: string
        customLinksComponent?: React.ReactNode
      }
      confirmation?: boolean
      consents?: boolean
      consentsPosition?: 'top' | 'bottom'
      social?: {
        google?: {
          buttonText?: string
        }
        facebook?: {
          buttonText?: string
        }
      }
    }
    signIn?: {
      title?: string
      headerComponent?: React.ReactNode
      linksComponent?: {
        display?: 'forgot-password' | 'sign-up' | 'both'
        linkText01?: string
        linkText02?: string
        customLinksComponent?: React.ReactNode
      }
      social?: {
        google?: {
          buttonText?: string
        }
        facebook?: {
          buttonText?: string
        }
      }
    }
    forgotPassword?: {
      title?: string
      headerComponent?: React.ReactNode
      linksComponent?: {
        display?: 'sign-up' | 'sign-in' | 'both'
        linkText01?: string
        linkText02?: string
        customLinksComponent?: React.ReactNode
      }
    }
    forgotPasswordSubmit?: {
      title?: string
      headerComponent?: React.ReactNode
    }
    consents?: {
      display?: 'sign-up' | 'sign-in' | 'both'
      position?: 'top' | 'bottom'
      consents?: IConsent[]
    }
    loader?: {
      classNames: string
      color: string
    }
  }
}

declare global {
  interface Window {
    FB: any
    gapi: any
  }
  // eslint-disable-next-line no-var
  var A6YReactAuthConfig: IA6YReactAuth
}

class A6YReactAuth {
  initialize(config: IA6YReactAuth): void {
    globalThis.A6YReactAuthConfig = config
    new AuthService()
  }
}

export const Auth = (props: IAuthProps): JSX.Element => <AuthCnt {...props} />
export const SignInContainer = (props: ISignInContainerProps): JSX.Element => (
  <SignInCnt {...props} />
)
export const SignUpContainer = (props: ISignUpContainerProps): JSX.Element => (
  <SignUpCnt {...props} />
)
export const ForgotPasswordContainer = (props: IAuthProps): JSX.Element => (
  <ForgotPasswordCnt {...props} />
)

export const SignOut = async (): Promise<unknown> => {
  return await AuthService.signOut()
}

export { SignIn, SignUp, ForgotPassword, AuthService }

export default A6YReactAuth

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Amplify from 'aws-amplify'
import CognitoService from './CognitoService'

class AuthService {
  constructor() {
    const provider = globalThis.A6YReactAuthConfig.provider.type
    switch (provider) {
      default:
        Amplify.configure({
          Auth: {
            region: globalThis.A6YReactAuthConfig.provider.region,
            userPoolId: globalThis.A6YReactAuthConfig.provider.userPoolId,
            userPoolWebClientId:
              globalThis.A6YReactAuthConfig.provider.userPoolWebClientId,
          },
        })
    }
  }

  static signIn(email: string, password: string): Promise<unknown> {
    return CognitoService.signIn(email, password)
  }

  static socialSignIn(data: any): Promise<unknown> {
    return CognitoService.socialLogin(data)
  }

  static signUp(email: string, password: string): Promise<unknown> {
    return CognitoService.signUp(email, password)
  }

  static confirmSignUp(email: string, code: string): Promise<unknown> {
    return CognitoService.signUp(email, code)
  }

  static socialSignUp(data: any): Promise<unknown> {
    return CognitoService.socialLogin(data)
  }

  static forgotPassword(email: string): Promise<unknown> {
    return CognitoService.forgotPassword(email)
  }

  static forgotPasswordSubmit(
    user: string,
    code: string,
    password: string,
  ): Promise<unknown> {
    return CognitoService.forgotPasswordSubmit(user, code, password)
  }

  static async signOut(): Promise<unknown> {
    return CognitoService.signOut()
  }
}

export default AuthService

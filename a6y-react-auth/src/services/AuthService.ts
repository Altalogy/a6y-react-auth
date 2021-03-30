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

  static async signIn(email: string, password: string): Promise<unknown> {
    return await CognitoService.signIn(email, password)
  }

  static async socialSignIn(data: any): Promise<unknown> {
    return await CognitoService.socialLogin(data)
  }

  static async signUp(email: string, password: string): Promise<unknown> {
    return await CognitoService.signUp(email, password)
  }

  static async confirmSignUp(email: string, code: string): Promise<unknown> {
    return await CognitoService.confirmSignUp(email, code)
  }

  static async socialSignUp(data: any): Promise<unknown> {
    return await CognitoService.socialLogin(data)
  }

  static async forgotPassword(email: string): Promise<unknown> {
    return await CognitoService.forgotPassword(email)
  }

  static async forgotPasswordSubmit(
    user: string,
    code: string,
    password: string,
  ): Promise<unknown> {
    return await CognitoService.forgotPasswordSubmit(user, code, password)
  }

  static async signOut(): Promise<unknown> {
    return await CognitoService.signOut()
  }
}

export default AuthService

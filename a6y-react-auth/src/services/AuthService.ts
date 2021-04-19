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
            identityPoolId:
              globalThis.A6YReactAuthConfig.provider.identityPoolId,
            identityPoolRegion: globalThis.A6YReactAuthConfig.provider.region,
            region: globalThis.A6YReactAuthConfig.provider.region,
            userPoolId: globalThis.A6YReactAuthConfig.provider.userPoolId,
            userPoolWebClientId:
              globalThis.A6YReactAuthConfig.provider.userPoolWebClientId,
            oauth: {
              domain: globalThis.A6YReactAuthConfig.provider.oauthDomain,
              scope: [
                'phone',
                'email',
                'profile',
                'openid',
                'aws.cognito.signin.user.admin',
              ],
              redirectSignIn:
                globalThis.A6YReactAuthConfig.provider.oauthRedirectSignIn,
              redirectSignOut:
                globalThis.A6YReactAuthConfig.provider.oauthRedirectSignOut,
              clientId:
                globalThis.A6YReactAuthConfig.provider.userPoolWebClientId,
              responseType: 'code', // or 'token', note that REFRESH token will only be generated when the responseType is code
            },
          },
        })
    }
  }

  static async signIn(email: string, password: string): Promise<unknown> {
    return await CognitoService.signIn(email, password)
  }

  static async socialSignIn(provider: string, data: any): Promise<unknown> {
    return await CognitoService.socialLogin(provider, data)
  }

  static async signUp(email: string, password: string): Promise<unknown> {
    return await CognitoService.signUp(email, password)
  }

  static async confirmSignUp(email: string, code: string): Promise<unknown> {
    return await CognitoService.confirmSignUp(email, code)
  }

  static async socialSignUp(provider: string, data: any): Promise<unknown> {
    return await CognitoService.socialLogin(provider, data)
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

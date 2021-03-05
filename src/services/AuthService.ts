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

  static signUp(email: string, password: string): Promise<unknown> {
    return CognitoService.signUp(email, password)
  }

  static forgotPassword(email: string): Promise<unknown> {
    return CognitoService.forgotPassword(email)
  }
}

export default AuthService

import Amplify from 'aws-amplify'
import CognitoService from './CognitoService'

let activeService: typeof CognitoService

class AuthService {
  initialize(config: {
    provider: {
      type: string
      userPoolId: string
      userPoolWebClientId: string
      region: string
    }
  }): typeof CognitoService {
    switch (config.provider.type) {
      default: {
        Amplify.configure({
          region: config.provider.region,
          userPoolId: config.provider.userPoolId,
          userPoolWebClientId: config.provider.userPoolWebClientId,
        })
        return (activeService = CognitoService)
      }
    }
  }

  static signIn(email: string, password: string): Promise<unknown> {
    return activeService.signIn(email, password)
  }
  static signUp(email: string, password: string): Promise<unknown> {
    return activeService.signUp(email, password)
  }
  static forgotPassword(email: string): Promise<unknown> {
    return activeService.forgotPassword(email)
  }
}

export default AuthService

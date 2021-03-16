/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Auth } from 'aws-amplify'

class CognitoService {
  static async signIn(email: string, password: string): Promise<unknown> {
    try {
      return await Auth.signIn(email, password)
    } catch (error) {
      return error
    }
  }

  static async signUp(email: string, password: string): Promise<unknown> {
    try {
      return await Auth.signUp(email, password)
    } catch (error) {
      return error
    }
  }

  static async socialLogin(data: any): Promise<unknown> {
    try {
      return await Auth.federatedSignIn(
        data.user.provider,
        { token: data.token, expires_at: data.expiresAt },
        data.user.email,
      )
    } catch (error) {
      return error
    }
  }

  static async forgotPassword(email: string): Promise<unknown> {
    try {
      const response = await Auth.forgotPassword(email)
      return response
    } catch (error) {
      return error
    }
  }

  static async signOut(): Promise<unknown> {
    try {
      return await Auth.signOut()
    } catch (error) {
      return error
    }
  }
}

export default CognitoService

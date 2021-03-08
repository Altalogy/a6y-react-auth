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

  static async forgotPassword(email: string): Promise<unknown> {
    try {
      const response = await Auth.forgotPassword(email)
      return response
    } catch (error) {
      return error
    }
  }
}

export default CognitoService

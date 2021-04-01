/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Auth } from 'aws-amplify'

class CognitoService {
  static async signIn(email: string, password: string): Promise<unknown> {
    try {
      return await Auth.signIn(email, password).then(() => {
        localStorage.setItem('a6y_provider', 'cognito')
        localStorage.setItem('a6y_token', '')
        localStorage.setItem('a6y_token_exp', '')
      })
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

  static async confirmSignUp(email: string, code: string): Promise<unknown> {
    try {
      return await Auth.confirmSignUp(email, code)
    } catch (error) {
      return error
    }
  }

  static async socialLogin(data: any): Promise<unknown> {
    try {
      const response = await Auth.federatedSignIn(
        data.provider,
        { token: data.token, expires_at: data.expiresAt },
        data.user.email,
      ).then(credentials => {
        localStorage.setItem('a6y_provider', data.provider)
        localStorage.setItem('a6y_token', data.token)
        localStorage.setItem('a6y_token_exp', data.expiresAt)
        return credentials
      })
      return response
    } catch (error) {
      return error
    }
  }

  static async forgotPasswordSubmit(
    user: string,
    code: string,
    password: string,
  ): Promise<unknown> {
    try {
      const response = await Auth.forgotPasswordSubmit(user, code, password)
      return response
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

  static async signOut() {
    try {
      await this._signOutCognito()
      this._signOutFacebook()
      this._signOutGoogle()
      localStorage.removeItem('a6y_provider')
      localStorage.removeItem('a6y_token')
      localStorage.removeItem('a6y_token_exp')
    } catch (e) {
      console.log('catch: ', e) // eslint-disable-line no-console
    }
  }
  static async _signOutCognito() {
    await Auth.signOut()
  }

  static async _signOutFacebook() {
    try {
      if (localStorage.getItem('atc_provider') === 'facebook') {
        await this.waitForFb()
        await window.FB.logout()
      }
    } catch (e) {
      console.log('LOGOUT FB error', e) // eslint-disable-line no-console
    }
  }

  static async _signOutGoogle() {
    try {
      await this.waitForGapi()
      if (window.gapi.auth2) {
        const auth2 = window.gapi.auth2.getAuthInstance()
        await auth2.signOut()
      }
    } catch (e) {
      console.log('LOGOUT G error', e) // eslint-disable-line no-console
    }
  }

  static async waitForGapi() {
    return new Promise<void>((resolve, reject) => {
      let waited = 0
      function wait(interval: number) {
        setTimeout(() => {
          waited += interval
          if (window.gapi !== undefined) {
            return resolve()
          }
          if (waited >= 20 * 1000) {
            return reject({ message: 'Timeout' })
          }
          wait(interval * 2)
        }, interval)
      }
      wait(30)
    })
  }

  static waitForFb() {
    return new Promise<void>((resolve, reject) => {
      let waited = 0
      function wait(interval: number) {
        setTimeout(() => {
          waited += interval
          if (window.FB && window.FB !== undefined) {
            return resolve()
          }
          if (waited >= 20 * 1000) {
            return reject({ message: 'Timeout' })
          }
          wait(interval * 2)
        }, interval)
      }
      wait(30)
    })
  }
}

export default CognitoService

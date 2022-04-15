/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Auth } from 'aws-amplify'
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth/lib/types'
import FacebookButton from './components/FacebookButton'
import FacebookLogin from './components/FacebookLogin'
import GoogleLogin from './components/GoogleLogin'
import GoogleButton from './components/GoogleButton'

/**
 * @typedef IProvider
 * @props {string} [apiId] - the app id or client id required by provider
 * @props {(response: any) => void} [callback] - callback with response from social provider
 */
export interface IProvider {
  callback: (response: any) => void
  appId: string
  className?: string
  iconClassName?: string
  textClassName?: string
  socialConfig?: {
    buttonText?: string
  }
}

/**
 * @typedef IProviderConfig
 * @props {string} [apiId] - the app id or client id required by provider
 * @props {string} [provider] - the name of provider
 */
export interface IProviderConfig {
  appId: string
  provider: string
  federatedIdentities?: boolean
  className?: string
  iconClassName?: string
  textClassName?: string
}

/**
 * @typedef ISocialLogin
 * @props {(response: any) => void} [callback] - callback with response from social provider
 */
export interface ISocialLogin {
  callback: (provider: string, response: any) => void
  socialConfig?: {
    google?: {
      buttonText?: string
    }
    facebook?: {
      buttonText?: string
    }
  }
}

/**
 * Renders the social login component with providers (declared in config)
 *
 * @param  {(response: any) => void} [callback] - callback with response from social provider
 *
 * @example
 * <SocialLogin
 *  callback={response => console.log(response)}
 * />
 */
const SocialLogin = ({ callback, socialConfig }: ISocialLogin): JSX.Element => {
  const callbackFromSocialProviders = (provider: string, response: any) => {
    callback(provider, response)
  }
  const renderLoginProviders = (config: any[]): JSX.Element[] => {
    const render: JSX.Element[] = []
    config.map((el, idx) => {
      const className = el.className || null
      const iconClassName = el.iconClassName || null
      const textClassName = el.textClassName || null
      switch (el.provider) {
        case 'facebook':
          if (el.federatedIdentities) {
            return render.push(
              <FacebookLogin
                key={idx}
                appId={el.appId}
                className={className}
                socialConfig={socialConfig?.facebook}
                callback={response =>
                  callbackFromSocialProviders('facebook', response)
                }
              />,
            )
          }
          return render.push(
            <FacebookButton
              key={idx}
              className={className}
              iconClassName={iconClassName}
              textClassName={textClassName}
              socialConfig={socialConfig?.facebook}
              onClick={() =>
                Auth.federatedSignIn({
                  provider: CognitoHostedUIIdentityProvider.Facebook,
                })
              }
            />,
          )
        case 'google':
          if (el.federatedIdentities) {
            return render.push(
              <GoogleLogin
                key={idx}
                className={className}
                appId={el.appId}
                socialConfig={socialConfig?.google}
                callback={response =>
                  callbackFromSocialProviders('google', response)
                }
              />,
            )
          }
          return render.push(
            <GoogleButton
              key={idx}
              className={className}
              iconClassName={iconClassName}
              textClassName={textClassName}
              socialConfig={socialConfig?.google}
              onClick={() =>
                Auth.federatedSignIn({
                  provider: CognitoHostedUIIdentityProvider.Google,
                })
              }
            />,
          )
        default:
          return render
      }
    })
    return render
  }
  return (
    <div className='a6y-react-auth__social-login'>
      {globalThis.A6YReactAuthConfig &&
        globalThis.A6YReactAuthConfig.auth &&
        renderLoginProviders(globalThis.A6YReactAuthConfig.auth)}
    </div>
  )
}

export default SocialLogin

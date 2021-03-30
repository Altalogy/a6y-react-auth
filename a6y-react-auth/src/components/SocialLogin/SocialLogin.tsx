/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import FacebookLogin from './components/FacebookLogin'
import GoogleLogin from './components/GoogleLogin'

/**
 * @typedef IProvider
 * @props {string} [apiId] - the app id or client id required by provider
 * @props {(response: any) => void} [callback] - callback with response from social provider
 */
export interface IProvider {
  callback: (response: any) => void
  appId: string
}

/**
 * @typedef IProviderConfig
 * @props {string} [apiId] - the app id or client id required by provider
 * @props {string} [provider] - the name of provider
 */
export interface IProviderConfig {
  appId: string
  provider: string
}

/**
 * @typedef ISocialLogin
 * @props {(response: any) => void} [callback] - callback with response from social provider
 */
export interface ISocialLogin {
  callback: (response: any) => void
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
const SocialLogin = ({ callback }: ISocialLogin): JSX.Element => {
  const callbackFromSocialProviders = (response: any) => {
    callback(response)
  }
  const renderLoginProviders = (config: any[]): JSX.Element[] => {
    const render: JSX.Element[] = []
    config.map((el, idx) => {
      switch (el.provider) {
        case 'facebook':
          return render.push(
            <FacebookLogin
              key={idx}
              appId={el.appId}
              callback={callbackFromSocialProviders}
            />,
          )
        case 'google':
          return render.push(
            <GoogleLogin
              key={idx}
              appId={el.appId}
              callback={callbackFromSocialProviders}
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

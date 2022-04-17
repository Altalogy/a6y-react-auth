/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Google from 'react-google-login'
import GoogleButton from './GoogleButton'
import { IProvider } from '../SocialLogin'

/**
 * Renders the google login button
 *
 * @param  {string} [appId] - {string} [apiId] - the app id or client id required by provider
 * @param  {(response: any) => void} [callback] - callback with response from social provider
 * @param  {string} [className] - CSS classes
 *
 * @example
 * <GoogleLogin
 *  callback={response => console.log(response)}
 *  appId='000000000'
 * />
 */
const GoogleLogin = ({
  callback,
  appId,
  className = 'a6y-react-auth__google-login',
  uiConfig,
}: IProvider): JSX.Element => {
  const responseGoogle = (response: any) => {
    const profile = response.profileObj
    const { id_token, expires_at } = response.getAuthResponse()
    callback({
      ...response,
      user: {
        email: profile.email,
        providerId: profile.googleId,
        provider: 'google',
      },
      token: id_token,
      expiresAt: expires_at,
    })
  }
  return (
    <div className={className}>
      <Google
        clientId={appId}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        onScriptLoadFailure={(er: unknown) => console.log(er)}
        cookiePolicy={'single_host_origin'}
        render={renderProps => (
          <GoogleButton onClick={renderProps.onClick} uiConfig={uiConfig} />
        )}
      />
    </div>
  )
}

export default GoogleLogin

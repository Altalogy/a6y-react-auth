/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Google from 'react-google-login'
import { Button } from '../../UI'
import { IProvider } from '../SocialLogin'
import googleIcon from '../../../assets/icons/google.svg'

/**
 * Renders the google login button
 *
 * @param  {string} [appId] - {string} [apiId] - the app id or client id required by provider
 * @param  {(response: any) => void} [callback] - callback with response from social provider
 *
 * @example
 * <GoogleLogin
 *  callback={response => console.log(response)}
 *  appId='000000000'
 * />
 */
const GoogleLogin = ({ callback, appId }: IProvider): JSX.Element => {
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
    <div className='a6y-react-auth__google-login'>
      <Google
        clientId={appId}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        onScriptLoadFailure={(er: unknown) => console.log(er)}
        cookiePolicy={'single_host_origin'}
        render={renderProps => (
          <Button
            role='button'
            className='a6y-react-auth__google-btn'
            onClick={renderProps.onClick}
          >
            <img src={googleIcon} alt='google-icon' /> Login with Google
          </Button>
        )}
      />
    </div>
  )
}

export default GoogleLogin

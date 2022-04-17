/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Facebook from 'react-facebook-login'
import FacebookButton from './FacebookButton'
import { IProvider } from '../SocialLogin'

/**
 * Renders the facebook login button
 *
 * @param  {string} [appId] - {string} [apiId] - the app id or client id required by provider
 * @param  {(response: any) => void} [callback] - callback with response from social provider
 * @param  {string} [className] - CSS classes
 *
 * @example
 * <FacebookLogin
 *  callback={response => console.log(response)}
 *  appId='000000000'
 * />
 */
const FacebookLogin = ({
  callback,
  appId,
  className = 'a6y-react-auth__facebook-login',
  uiConfig,
}: IProvider): JSX.Element => {
  const responseFacebook = (response: any) => {
    const expiresAt = response.expiresIn * 1000 + new Date().getTime()
    const token = response.accessToken
    callback({
      ...response,
      user: {
        email: response.email,
        providerId: response.id,
        provider: 'facebook',
      },
      token,
      expiresAt,
    })
  }
  return (
    <div className={className}>
      <Facebook
        appId={appId}
        callback={responseFacebook}
        fields='name,email'
        render={(renderProps: {
          onClick: React.MouseEventHandler<HTMLButtonElement>
        }) => (
          <FacebookButton onClick={renderProps.onClick} uiConfig={uiConfig} />
        )}
      />
    </div>
  )
}

export default FacebookLogin

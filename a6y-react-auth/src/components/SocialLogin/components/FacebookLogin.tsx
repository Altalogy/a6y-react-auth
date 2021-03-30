/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Facebook from 'react-facebook-login'
import { Button } from '../../UI'
import { IProvider } from '../SocialLogin'
import facebookIcon from '../../../assets/icons/facebook.svg'

/**
 * Renders the facebook login button
 *
 * @param  {string} [appId] - {string} [apiId] - the app id or client id required by provider
 * @param  {(response: any) => void} [callback] - callback with response from social provider
 *
 * @example
 * <FacebookLogin
 *  callback={response => console.log(response)}
 *  appId='000000000'
 * />
 */
const FacebookLogin = ({ callback, appId }: IProvider): JSX.Element => {
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
    <div className='a6y-react-auth__facebook-login'>
      <Facebook
        appId={appId}
        callback={responseFacebook}
        fields='name,email'
        render={(renderProps: {
          onClick: React.MouseEventHandler<HTMLButtonElement>
        }) => (
          <Button
            role='button'
            className='a6y-react-auth__facebook-btn'
            onClick={renderProps.onClick}
          >
            <img src={facebookIcon} alt='facebook-icon' /> Login with Facebook
          </Button>
        )}
      />
    </div>
  )
}

export default FacebookLogin

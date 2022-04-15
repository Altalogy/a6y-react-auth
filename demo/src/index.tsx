import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import A6YReactAuth from '@altalogy/a6y-react-auth'
import App from './App'

const ReactAuth = new A6YReactAuth()

ReactAuth.initialize({
  provider: {
    type: 'cognito',
    userPoolId: 'x-xx-1_xyz',
    userPoolWebClientId: 'xyz',
    identityPoolId: 'x-xx-1:xyz',
    region: 'x-xx-1',
    oauthDomain: 'test.domain',
    oauthRedirectSignIn: 'https://example.com',
    oauthRedirectSignOut: 'https://example.com'
  },
  auth: [
    { appId: 'xyz', provider: 'facebook' },
    { appId: 'xyz', provider: 'google' }
  ],
  components: {
    signUp: {
      social: {
        google: {
          buttonText: 'Test text'
        }
      }
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import A6YReactAuth from 'a6y-react-auth'
import App from './App'

const ReactAuth = new A6YReactAuth()

ReactAuth.initialize({
  provider: {
    type: 'cognito',
    userPoolId: 'us-east-1_xyz',
    userPoolWebClientId: 'xyz',
    region: 'us-east-1',
  },
  components: {
    signUp: {
      privacy: true,
      terms: true,
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

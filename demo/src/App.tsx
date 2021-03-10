import React from 'react'
import { Router } from 'react-router'
import routes from './routes/routes'
import history from './history'
import './App.scss'

function App() {
  return (
    <Router history={history}>{routes}</Router>
  )
}

export default App

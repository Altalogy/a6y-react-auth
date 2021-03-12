import { HashRouter } from 'react-router-dom'
import routes from './routes/routes'
import './App.scss'

const App = (): JSX.Element => {
  return (
    <div className='app'>
      <HashRouter basename={process.env.PUBLIC_URL}>{routes}</HashRouter>
    </div>
  )
}

export default App

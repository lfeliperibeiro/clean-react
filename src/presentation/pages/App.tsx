import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '@/presentation/pages/login'
import '../styles/global.scss'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={Login}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App

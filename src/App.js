import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'
import SignIn from './components/signin'
import ForgetPassword from './components/forgetpassword'
import SignUp from './components/signup'
import Store from './redux/store'

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={withRouter(SignIn)} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/forgetpassword' component={ForgetPassword} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App

import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Flip from './components/games/Flip/index.js'
import NotFound from './components/layout/NotFound';

import { LOGOUT } from './actions/types'

// Redux
import { Provider } from 'react-redux'
import store from './store'
import setAuthToken from './utils/setAuthToken'

const App = () => {
  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token)
    }
    // store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT })
    })
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Flip} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    </Provider>
  )
}

export default App

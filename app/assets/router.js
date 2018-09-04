import React from 'react'
import { Router, Route, Switch, Redirect } from 'dva/router'
import Header from './components/Header/Header'
import IndexPage from './routes/IndexPage/IndexPage'

function RouterConfig({ history }) {
  return (
    <Router history={ history }>
      <div>
        <Header />
        <Switch>
          <Route exact path='/home' component={ IndexPage } />
          <Redirect from='/' to='/home' />
        </Switch>
      </div>
    </Router>
  )
}

export default RouterConfig

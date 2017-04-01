import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {App, OrderList, Order} from 'containers'
import {Navigation} from 'components'

export function getRoutes () {
  return (
    <App>
      <Router>
        <div>
          <Navigation />
          <Route exact path='/' component={OrderList} />
          <Route exact path='/order/:id' render={({match}) => <Order id={match.params.id} />} />
        </div>
      </Router>
    </App>
  )
}
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {App, OrderList} from 'components'

export function getRoutes () {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={App} />
    </Router>
  )
}
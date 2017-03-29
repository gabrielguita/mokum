import React from 'react'
import {Navigation} from 'components'
import {OrderList} from 'containers'
import {Orders} from 'containers'
import {main} from './../style.scss'
/*
* Navigation
* Router
* <OrderList />
*
*/

const App = React.createClass({
  render () {
    return (<div className={main}>
      <Navigation />
      <Orders />
    </div>)
  }
})

export default App

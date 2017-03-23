import React from 'react'
import {Navigation} from 'components'
import {OrderList} from 'containers'
import {Order} from 'containers'

/*
* Navigation
* Router
*       <OrderList />

 * */


const App = React.createClass({
  render () {
    return (<div className="main" style={{'width': '1024px', 'margin': '0 auto'}}>
      <Navigation />
    </div>)
  }
})

export default App
import React from 'react'

/*
* Navigation
* Router
*       <OrderList />

 * */

const App = React.createClass({
  render () {
    return (<div className="main" style={{'width': '1024px', 'margin': '0 auto'}}>
      {this.props.children}
    </div>)
  }
})

export default App
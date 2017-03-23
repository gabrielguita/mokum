import React from 'react'
import {data} from 'data/data'

console.log(data)
const OrderList = React.createClass({
  render () {
    return (
      <div className="order-list" style={{padding: '1em 0'}}>
        <div>
          <div>{`Header TBD`}</div>
          {data.map((user, index) => {
            return <div key={index} style={{width: '100%', display: 'block'}}>
              <div style={{float: 'left', width: '20%'}}>{`${user.first_name}`}</div>
              <div style={{float: 'left', width: '20%'}}>{`${user.last_name}`}</div>
              <div style={{float: 'left', width: '20%'}}>{`${user.email}`}</div>
              <div style={{float: 'left', width: '20%'}}>{`${user.status}`}</div>
              <div style={{float: 'left', width: '20%'}}><button>{`Delete`}</button></div>
            </div>
          })}
        </div>
      </div>
    )
  }
})

export default OrderList
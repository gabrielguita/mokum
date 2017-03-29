import React from 'react'
import {data} from 'data/data'
import {usersList, usersDetails, details} from './../style.scss'
console.log(data)
const OrderList = React.createClass({
  render () {
    return (
      <div className={usersList}>
        <div>
          <div>{`Header TBD`}</div>
          {data.map((user, index) => {
            return <div key={index} className={usersDetails}>
              <div className={details}>{`${user.first_name}`}</div>
              <div className={details}>{`${user.last_name}`}</div>
              <div className={details}>{`${user.email}`}</div>
              <div className={details}>{`${user.status}`}</div>
              <div className={details}><button>{`Delete`}</button></div>
            </div>
          })}
        </div>
      </div>
    )
  }
})

export default OrderList

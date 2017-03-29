import React from 'react'
import {header, userName} from './../style.scss'

const Navigation = React.createClass({
  render() {
    return (
      <div className={header}>
        {`logo`}
        <div className={userName}>
          {`User Name`}
        </div>
      </div>
    )
  }
})

export default Navigation

import React from 'react'
import {Link} from 'react-router-dom'

const Navigation  = React.createClass({
  render() {
    return (
      <div className="header" style={{'width': '100%'}}>
        {`logo`}
        <div style={{'float': 'right'}}>
          <ul>
            <li>
              <Link to='/'>{`Home`}</Link>
            </li>
            <li>
              <Link to='/orders'>{`Orders`}</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
})

export default Navigation
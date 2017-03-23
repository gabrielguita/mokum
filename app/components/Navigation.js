import React from 'react'

const Navigation  = React.createClass({
  render() {
    return (
      <div className="header" style={{'width': '100%'}}>
        {`logo`}
        <div style={{'float': 'right'}}>
          {`User Name`}
        </div>
      </div>
    )
  }
})

export default Navigation
import React, {PropTypes} from 'react'
import {orderComponent, row} from './../style.scss'
const InputField = ({label, name, value, placeholder, handleChange}) => {
  return (
    <div className={row}>
      <label>{label}</label>
      <input type='text' name={name} onChange={(e) => handleChange(e)} value={value} placeholder={placeholder} />
    </div>
  )
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
}

// TODO: Create a Select input for status
const Order = React.createClass({
  getInitialState () {
    return {
      order: {
        first_name: '',
        last_name: '',
        ip_address: '',
      },
    }
  },
  handleChange (e) {
    let field = e.target.name
    let order = this.state.order
    order[field] = e.target.value
    this.setState({
      order
    })
  },
  submitOrder () {
    // console.log(this.state.order)
  },
  render () {
    return (
      <div className={orderComponent}>
          <form>
              <InputField name={'first_name'} label={'Name'} value={this.state.order['first_name']} placeholder={`Name goes here`} handleChange={this.handleChange} />
              <InputField name={'last_name'} label={'Last Name'} value={this.state.order['last_name']} placeholder={`Last Name goes here`} handleChange={this.handleChange} />
              <InputField name={'ip_address'} label={'Ip Address'} value={this.state.order['ip_address']} placeholder={`IP Address`} handleChange={this.handleChange} />
              <button type='submit' onClick={(e) => this.submitOrder(e)}>{`Submit`}</button>
          </form>
      </div>
    )
  }
})

export default Order

import React, { Component } from 'react'

class CreateShipment extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sender_address: '',
      pickup_address: '',
      delivery_address: ''
    }
  }

  onSenderAddressChange(event) {
    this.setState({ sender_address: event.target.value })
  }

  onPickupAddressChange(event) {
    this.setState({ pickup_address: event.target.value })
  }

  onDeliveryAddressChange(event) {
    this.setState({ delivery_address: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()

    if (this.state.sender_address.length < 2)
    {
      return alert('Please fill in your name.')
    }

    this.props.onCreateShipmentFormSubmit(this.state.sender_address, this.state.pickup_address, this.state.delivery_address)
  }

  render() {
    return(
      <form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit.bind(this)}>
        <fieldset>
          <label htmlFor="name">Sender Address</label>
          <input id="sender_address" type="text" value={this.state.sender_address} onChange={this.onSenderAddressChange.bind(this)} placeholder="Sender Address" />

          <label htmlFor="name">Pickup Address</label>
          <input id="pickup_address" type="text" value={this.state.pickup_address} onChange={this.onPickupAddressChange.bind(this)} placeholder="Pickup Address" />

          <label htmlFor="name">Delivery Address</label>
          <input id="delivery_address" type="text" value={this.state.delivery_address} onChange={this.onDeliveryAddressChange.bind(this)} placeholder="Delivery Address" />

          <br />

          <button type="submit" className="pure-button pure-button-primary">Create Shipment</button>
        </fieldset>
      </form>
    )
  }
}

export default CreateShipment

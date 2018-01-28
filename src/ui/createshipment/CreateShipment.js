import React, { Component } from 'react'

class CreateShipment extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sender_address: '',
      pickup_address: '',
      delivery_address: '',
      shipping_cost: 0.0
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

  onShippingCostChange(event) {
    this.setState({ shipping_cost: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()

    if (this.state.sender_address.length < 2)
    {
      return alert('Please fill in your name.')
    }

    this.props.onCreateShipmentFormSubmit(this.state.sender_address, this.state.pickup_address, this.state.delivery_address, this.state.shipping_cost)
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

          <label htmlFor="name">Shipping Cost (ETH)</label>
          <input id="shipping_cost" type="text" value={this.state.shipping_cost} onChange={this.onShippingCostChange.bind(this)} placeholder="Shipping Cost" />

          <br />

          <button type="submit" className="pure-button pure-button-primary">Create Shipment</button>
        </fieldset>
      </form>
    )
  }
}

export default CreateShipment

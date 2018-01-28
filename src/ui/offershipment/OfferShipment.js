import React, { Component } from 'react'

class OfferShipment extends Component {
  constructor(props) {
    super(props)

    this.state = {
      license_plate: '',
    }
  }

  onLicensePlateChange(event) {
    this.setState({ license_plate: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()

    this.props.onOfferShipmentFormSubmit(this.props.shipping_number, this.state.license_plate)
  }

  render() {
    return(
      <form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit.bind(this)}>
        <fieldset>
          <label htmlFor="name">License Plate</label>
          <input id="license_plate" type="text" value={this.state.license_plate} onChange={this.onLicensePlateChange.bind(this)} placeholder="License Plate" />

          <br />

          <button type="submit" className="pure-button pure-button-primary">Offer Shipment</button>
        </fieldset>
      </form>
    )
  }
}

export default OfferShipment

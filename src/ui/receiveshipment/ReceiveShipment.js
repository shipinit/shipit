import React, { Component } from 'react'
import { Button } from 'reactstrap'

class ReceiveShipment extends Component {
  constructor(props) {
    super(props)
  }

  handleSubmit() {
    this.props.onReceiveShipmentFormSubmit(this.props.shipping_number);
  }

  render() {
    return(
      <Button onClick={this.handleSubmit.bind(this)}>Shipment Received</Button>
    )
  }
}

export default ReceiveShipment

import React from 'react'
import { getOpenShipments } from './OpenShipmentsActions'

const OpenShipments = () => {
  const shipments = getOpenShipments().map((shipment) => 
    <li>Pickup Address {shipment.pickupAddress}</li>
  )
  return({shipments})
}

export default OpenShipments

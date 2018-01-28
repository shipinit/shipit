pragma solidity ^0.4.11;

import './zeppelin/lifecycle/Killable.sol';

contract Shipping is Killable {
  struct Shipment {
    address sender;
    address receiver;
    address transporter;
    uint shippingCost;
    string licensePlate;
    string pickupAddress;
    string deliveryAddress;
    bool enRoute;
    bool shipped;
  }

  Shipment[] public shipments;

  function createShipment(address sender, string pickupAddress, string deliveryAddress) public payable {
    // Receiver creates shipment
    shipments.push(Shipment(sender,msg.sender,0x0,msg.value,"",pickupAddress,deliveryAddress,false,false));
  }

  function cancelShipment(uint shipmentNumber) {
    // Make sure transporter has not accepted shipment
    // If not, then cancel shipment, and return funds
    require(shipments[shipmentNumber].transporter == 0x0);
    Shipment shipment = shipments[shipmentNumber];
    shipment.receiver.transfer(shipment.shippingCost);
    delete shipments[shipmentNumber];
  }

  function getShipment(uint shipmentNumber) returns (address _sender, address _receiver, address _transporter) {
    Shipment shipment = shipments[shipmentNumber];
    return (shipment.sender, shipment.receiver, shipment.transporter);
  }

  function offerShipment(uint shipmentNumber) {
    shipments[shipmentNumber].transporter = msg.sender;
  }

  function cancelOffer(uint shipmentNumber) {
    require(shipments[shipmentNumber].enRoute == false);
    shipments[shipmentNumber].transporter = 0x0;
  }

  function cancelTransportation(uint shipmentNumber) {
    require(shipments[shipmentNumber].enRoute == true);
    shipments[shipmentNumber].transporter = 0x0;
    shipments[shipmentNumber].enRoute = false;
  }

  function pickedUpShipment(uint shipmentNumber, string _licensePlate) {
    // Sender confirms that transporter picked up package
    require(msg.sender == shipments[shipmentNumber].sender);
    shipments[shipmentNumber].licensePlate = _licensePlate;
  }

  function receiveShipment(uint shipmentNumber) {
    Shipment shipment = shipments[shipmentNumber];
    require(msg.sender == shipment.receiver && shipment.enRoute == true);
    shipment.transporter.transfer(shipment.shippingCost);
    shipments[shipmentNumber].shipped = true;
    shipments[shipmentNumber].enRoute = false;
  }
}

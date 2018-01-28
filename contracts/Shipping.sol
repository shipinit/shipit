pragma solidity ^0.4.11;

contract Shipping {
  struct Shipment {
    address sender;
    address receiver;
    address transporter;
    bool enRoute;
    uint shippingCost;
  }

  Shipment[] public shipments;

  function createShipment(address sender) public payable {
    // Receiver creates shipment
    shipments.push(Shipment(sender,msg.sender,0x0,false,msg.value));
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
    if (shipments[shipmentNumber].enRoute == true) throw;
    shipments[shipmentNumber].transporter = 0x0;
  }

  function cancelTransportation(uint shipmentNumber) {
    if (shipments[shipmentNumber].enRoute == false) throw;
  }

  function withdrawalFunds(uint shipmentNumber) {

  }

  function pickedUpShipment(uint shipmentNumber) {
    // Sender confirms that transporter picked up package
    if (msg.sender != shipments[shipmentNumber].sender) throw;

  }
}

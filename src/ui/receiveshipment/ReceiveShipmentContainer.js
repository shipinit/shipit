import { connect } from 'react-redux'
import ReceiveShipment from './ReceiveShipment'
import { receiveShipment } from './ReceiveShipmentActions'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onReceiveShipmentFormSubmit: (shipmentNumber) => {
      dispatch(receiveShipment(shipmentNumber))
    }
  }
}

const ReceiveShipmentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReceiveShipment)

export default ReceiveShipmentContainer

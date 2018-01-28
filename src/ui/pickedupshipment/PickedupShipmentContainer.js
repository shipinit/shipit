import { connect } from 'react-redux'
import PickedupShipment from './PickedupShipment'
import { pickedupShipment } from './PickedupShipmentActions'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPickedupShipmentFormSubmit: (shipping_number, license_plate) => {
      dispatch(pickedupShipment(shipping_number, license_plate))
    }
  }
}

const PickedupShipmentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PickedupShipment)

export default PickedupShipmentContainer

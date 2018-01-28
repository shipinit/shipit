import { connect } from 'react-redux'
import CreateShipment from './CreateShipment'
import { createShipment } from './CreateShipmentActions'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateShipmentFormSubmit: (sender_address, pickup_address, delivery_address, shipping_cost) => {
      dispatch(createShipment(sender_address, pickup_address, delivery_address, shipping_cost))
    }
  }
}

const CreateShipmentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateShipment)

export default CreateShipmentContainer

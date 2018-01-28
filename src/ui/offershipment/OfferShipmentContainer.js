import { connect } from 'react-redux'
import OfferShipment from './OfferShipment'
import { offerShipment } from './OfferShipmentActions'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateShipmentFormSubmit: (shipping_number, license_plate) => {
      dispatch(createShipment(shipping_number, license_plate))
    }
  }
}

const OfferShipmentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OfferShipment)

export default OfferShipmentContainer

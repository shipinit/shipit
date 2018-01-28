import { connect } from 'react-redux'
import OfferShipment from './OfferShipment'
import { offerShipment } from './OfferShipmentActions'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onOfferShipmentFormSubmit: (shipping_number, license_plate) => {
      dispatch(offerShipment(shipping_number, license_plate))
    }
  }
}

const OfferShipmentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OfferShipment)

export default OfferShipmentContainer

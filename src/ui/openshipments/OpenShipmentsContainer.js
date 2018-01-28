import { connect } from 'react-redux'
import OpenShipments from './OpenShipments'
import { getShipments } from './OpenShipmentsActions'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    shipments: dispatch(getShipments())
  }
}

const OpenShipmentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OpenShipments)

export default OpenShipmentsContainer

import React, { Component } from 'react'
import ShippingContract from '../../../build/contracts/Shipping.json'
// import OpenShipmentsContainer from '../../ui/openshipments/OpenShipmentsContainer'
import CreateShipmentContainer from '../../ui/createshipment/CreateShipmentContainer'
import store from '../../store'
import { Table } from 'reactstrap';

const contract = require('truffle-contract')

class Dashboard extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
    this.state = {
      var: '' 
    };

    this.getShipments = this.getShipments.bind(this);
  }

  componentDidMount() {
    this.getShipments()
  }

  getShipments() {
    let web3 = store.getState().web3.web3Instance

    const shipping = contract(ShippingContract)
    shipping.setProvider(web3.currentProvider)

    // Declaring this for later so we can chain functions on Authentication.
    var shippingInstance

    var _this = this;

    // Get current ethereum wallet.
    web3.eth.getCoinbase((error, coinbase) => {
      // Log errors, if any.
      if (error) {
        console.error(error);
      }

      shipping.deployed().then(function(instance) {
        shippingInstance = instance

        shippingInstance.getShipmentCount.call()
        .then(function(result) {
          console.log('get shipment count')
          console.log(result)
        })
        
        shippingInstance.getShipment.call(0)
        .then(function(result) {
          // If no error, login user.
          console.log('getshipmentcount')
          console.log(result)
          _this.setState({var: result})
          // debugger
          // return result;
          // return dispatch(loginUser())
        })
        // Attempt to sign up user.
        .catch(function(result) {
          // If error...
        })
      })
    })
  }

  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Dashboard</h1>
            <p><strong>Congratulations {this.props.authData.name}!</strong> If you're seeing this page, you've logged in with your own smart contract successfully.</p>

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
            <CreateShipmentContainer/>
            {this.state.var}
          </div>
        </div>
      </main>
    )
  }
}

export default Dashboard

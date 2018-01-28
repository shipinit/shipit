import ShippingContract from '../../../build/contracts/Shipping.json'
// import { loginUser } from '../loginbutton/LoginButtonActions'
import { browserHistory } from 'react-router'
import store from '../../store'

const contract = require('truffle-contract')

export function offerShipment(shipping_number, license_plate) {
  let web3 = store.getState().web3.web3Instance

  // Double-check web3's status.
  if (typeof web3 !== 'undefined') {

    return function(dispatch) {
      // Using truffle-contract we create the authentication object.
      const shipping = contract(ShippingContract)
      shipping.setProvider(web3.currentProvider)

      // Declaring this for later so we can chain functions on Authentication.
      var shippingInstance

      // Get current ethereum wallet.
      web3.eth.getCoinbase((error, coinbase) => {
        // Log errors, if any.
        if (error) {
          console.error(error);
        }

        shipping.deployed().then(function(instance) {
          shippingInstance = instance

          // Attempt to sign up user.
          shippingInstance.offerShipment(shipping_number, license_plate, {from: coinbase})
          .then(function(result) {
            // If no error, login user.
            return browserHistory.push('/dashboard')
          })
          .catch(function(result) {
            // If error...
          })
        })
      })
    }
  } else {
    console.error('Web3 is not initialized.');
  }
}

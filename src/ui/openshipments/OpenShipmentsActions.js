import ShippingContract from '../../../../build/contracts/Shipping.json'
// import { loginUser } from '../loginbutton/LoginButtonActions'
import store from '../../../store'

const contract = require('truffle-contract')

export function getOpenShipments() {
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
          shippingInstance.getOpenShipments({from: coinbase})
          .then(function(result) {
            // If no error, login user.
            return result;
            // return dispatch(loginUser())
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

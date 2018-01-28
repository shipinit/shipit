import React, { Component } from 'react'
import { Jumbotron, Button } from 'reactstrap';

class Home extends Component {
  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <br />
            <Jumbotron>
              <h1 className="display-3">Welcome to <b>ShipIt!</b></h1>
              <p className="lead">The decentralized P2P shipping network of the future.</p>
              <hr className="my-2" />
              <p>Find out how you can help revolutionize parcel deliveries today!</p>
              <p className="lead">
                <Button color="primary">Sign Up</Button>
              </p>
            </Jumbotron>

            <h2>Why ship it with ShipIt?</h2>
            <p>ShitIt! is built using the brand new Truffle Framework to interface with smart contracts made to live on a distributed ledger.</p>
            <p>Utilizing a decentralized architecture allows a rapid decrease in prices of deliveries, allowing people to participate in a competitive delivery market where they can be certain they are receiving the best prices.</p>
            <p></p>
            <p>Learn more about us with a quick, simple demo</p>
          </div>
        </div>
      </main>
    )
  }
}

export default Home

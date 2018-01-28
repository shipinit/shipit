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
              <p>Find out how you can help revolutionize parcel deliveries as a:</p>
              <p className="lead">
                <Button color="primary">Shipper</Button>{' '}
                <Button color="secondary">Sender / Receiver</Button>
              </p>
            </Jumbotron>

            <h2>Why ship it with ShipIt?</h2>
            <p>This particular box comes with autentication via a smart contract built-in.</p>
            <p>In the upper-right corner, you'll see a login button. Click it to login with with the Authentication smart contract. If there is no user information for the given address, you'll be redirected to sign up. There are two authenticated routes: "/dashboard", which displays the user's name once authenticated; and "/profile", which allows a user to update their name.</p>
            <h3>Redirect Path</h3>
            <p>This example redirects home ("/") when trying to access an authenticated route without first authenticating. You can change this path in the failureRedriectUrl property of the UserIsAuthenticated wrapper on <strong>line 9</strong> of util/wrappers.js.</p>
            <h3>Accessing User Data</h3>
            <p>Once authenticated, any component can access the user's data by assigning the authData object to a component's props.<br/><code>{"// In component's render function."}<br/>{"const { authData } = this.props"}<br/><br/>{"// Use in component."}<br/>{"Hello { this.props.authData.name }!"}</code></p>
            <h3>Further Reading</h3>
            <p>The React/Redux portions of the authentication fuctionality are provided by <a href="https://github.com/mjrussell/redux-auth-wrapper" target="_blank">mjrussell/redux-auth-wrapper</a>.</p>
          </div>
        </div>
      </main>
    )
  }
}

export default Home

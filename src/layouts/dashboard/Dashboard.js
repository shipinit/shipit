import React, { Component } from 'react'
import { Button, Collapse, Card, CardBody, Container, 
	Row, Col, InputGroup, InputGroupAddon, 
	InputGroupText, Input } from 'reactstrap'
import { _ } from 'underscore'



class Dashboard extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props

    this.state = { collapsed: [],
    	arr: [11, 22, 33, 45, 52, 61],
    	stub: {
    		shippingList: [
    			{
    				shippingCost: 14,
    				isTaken: false,
    				licensePlate: "",
    				pickupAddress: "382 Whitney Ave.",
    				deliveryAddress: "56 Victoria St.",
    				enRoute: false,
    				isShipped: true
    			},
    			{
    				shippingCost: 14,
    				isTaken: false,
    				licensePlate: "",
    				pickupAddress: "31 Kind's College Cir.",
    				deliveryAddress: "370 Charles St.",
    				enRoute: false,
    				isShipped: false
    			},
    			{
    				shippingCost: 14,
    				isTaken: false,
    				licensePlate: "",
    				pickupAddress: "45 Richmond St. W.",
    				deliveryAddress: "12 Banff Ave.",
    				enRoute: true,
    				isShipped: false
    			}
    		]
    	}
    };
    this.toggle = this.toggle.bind(this);
    this.getShipmentColour = this.getShipmentColour.bind(this);
    this.getExpandButton = this.getExpandButton.bind(this);
  }

  componentDidMount() {
  	var temp = [];
	for (var i = 0; i < this.state.stub.shippingList.length; i++) {
		temp.push(true);
	}
	this.setState({ collapsed: temp });
  }


  toggle(i) {
  	var temp = this.state.collapsed;
  	temp[i] = !temp[i];
  	this.setState({ collapsed: temp });
  }

  getShipmentColour(i) {
  	var colour = "";
  	if (this.state.stub.shippingList[i].isShipped) { // These are done
  		colour =  "#757575";
  	} else if (this.state.stub.shippingList[i].enRoute) { // These are in progress
  		colour =  "#F4511E";
  	} else { // Can signup with these
  		colour = "#43A047";
  	}
  	return {background: colour};
  	
  }

  getExpandButton(i) {
  	if (!this.state.stub.shippingList[i].enRoute && !this.state.stub.shippingList[i].isShipped) {
  		return (<Button onClick={(evt) => this.toggle(i)}>{this.state.collapsed[i] ? "signup" : "less"}</Button>);
  	} else if (this.state.stub.shippingList[i].enRoute) {
  		return (<Button onClick={(evt) => this.toggle(i)}>{this.state.collapsed[i] ? "more info" : "less"}</Button>);
  	}
  	return (<div></div>);
  }

  render() {
    // <main className="container">
      //   <div className="pure-g">
      //     <div className="pure-u-1-1">
      //       <h1>Dashboard</h1>
      //       <p><strong>Congratulations {this.props.authData.name}!</strong> If you're seeing this page, you've logged in with your own smart contract successfully.</p>
      //     </div>
      //   </div>
      // </main>

    return(
      <div>
        <br/><br/><br/><br/>
        <Container>
        <Row style={{ paddingLeft: '20dp'}}>
			<Col xs="1" className="text-center"><strong>Cost</strong></Col>
			<Col xs="4" className="text-center"><strong>Pickup Address</strong></Col>
			<Col xs="4" className="text-center"><strong>Delivery Address</strong></Col>
		</Row><br/>
        {this.state.stub.shippingList.map((el, i) => {
        	return (
        		<div key={i}>
    				<Card body inverse style={this.getShipmentColour(i)}><CardBody>
						<Row>
							<Col xs="1" className="text-center"><strong>${el.shippingCost}</strong></Col>
							<Col xs="4" className="text-center">{el.pickupAddress}</Col>
							<Col xs="4" className="text-center">{el.deliveryAddress}</Col>
							<Col xs="1" className="text-center"></Col>

							<Col xs="1">{this.getExpandButton(i)}</Col>
						</Row>
						<Collapse isOpen={!this.state.collapsed[i]}>
						<br/>
						<Row>
						<Col xs="3">
						<InputGroup>
							<Input placeholder="shipping cost" type="text" />
						</InputGroup>
						</Col>
						<Col xs="3">
						<InputGroup>
							<Input placeholder="license plate" type="text" />
						</InputGroup>
						</Col>
						</Row>
						</Collapse>
    				</CardBody></Card>
        		</div>
        		)
        })}
        </Container>
      </div>
    )
  }
}

export default Dashboard

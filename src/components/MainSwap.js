import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import { Media, Form, FormGroup, Label } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


const BCHSLPprice = 400000
const BCHUSDprice = 530

class SwapForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {slp: 0, bch: 0, slpusd: 0, bchusd: 0 };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ bch: e.target.value, slp: e.target.value / BCHSLPprice, bchusd: e.target.value * BCHUSDprice, slpusd: e.target.value * BCHUSDprice / BCHSLPprice });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.slp === 0) {
      return;
    }

  }

  render() {
      return (

              <>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                    You are exchanging:
                  <Col sm={10}>
                    <Input type="text" name="BCHamount" id="BCHamount" onChange={this.handleChange} value={this.state.bch} bsSize="lg" /><Label for="BCHamount" sm={2} size="lg">BCH</Label>
                    <Input type="text" name="BCHUSDamount" id="BCHUSDamount" bsSize="lg" value={this.state.bchusd} disabled /><Label for="BCHUSDamount" sm={2} size="lg">USD</Label>
                  </Col>

                </FormGroup>

                <FormGroup row>
                    You will receive:
                  <Col sm={10}>
                    <Input type="text" name="SLPamount" id="SLPamount" bsSize="lg" value={this.state.slp} disabled /><Label for="SLP" sm={2} size="lg">SLP</Label>
                    <Input type="text" name="SLPUSDamount" id="SLPUSDamount" bsSize="lg" value={this.state.slpusd} disabled /><Label for="SLPUSDamount" sm={2} size="lg">USD</Label>
                  </Col>
                </FormGroup>
                <Button>Exchange</Button>
              </Form>
              </>
      );
  }
};

const ConvertFromDropdown = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Dropdown
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem>Some Action</DropdownItem>
        <DropdownItem text>Dropdown Item Text</DropdownItem>
        <DropdownItem disabled>Action (disabled)</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Foo Action</DropdownItem>
        <DropdownItem>Bar Action</DropdownItem>
        <DropdownItem>Quo Action</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

function MainSwap() {
  return (
        <>
                <SwapForm/>
        </>
  );
}

export default MainSwap;

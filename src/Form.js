
        import React from 'react';
        import { Alert, Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

        export default class Example extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
        modal: false
        };

        this.toggle = this.toggle.bind(this);
        this.click = this.click.bind(this);
        }

        sayHi(){
        var txtName31 = document.getElementById("txtName31").value;
        var txtName32 = document.getElementById("txtName32").value;
        var txtName33 = document.getElementById("txtName33").value;
        var txtOutput = document.getElementById("txtOutput");
        var problems= " ";
        for (var i = 1; i < 31; i++) {
        if (document.getElementById("txtName"+i).checked) {
        problems= problems + document.getElementById("txtName"+i).value+",";
        }
        }

        txtOutput.value = "Your problem/s: " + problems + ", "+ txtName31+ ", "+ txtName32 + ", "+ txtName33 +"."

        }

        toggle() {
        this.setState({
        modal: !this.state.modal
        });
        }

        click(){
        this.sayHi();
        this.toggle();
        }

        render() {
        return (
          <Form action="savedb.php" method="post">
          <FormGroup>
          <Label for="txtOutput">Problem(s)</Label>
          <Input type="textarea" name="problems[]" id="txtOutput" onClick={this.toggle} />
          </FormGroup>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className=" modal-lg">
          <ModalHeader toggle={this.toggle}>Select problems from below:</ModalHeader>
          <ModalBody>
          <Container>
          <Row>
          <Col xs="12" sm="12" md="6" lg="4">
          <h4>Electrical Problems:</h4>
          <FormGroup check>
          <Label check>
          <Input type="checkbox" id = "txtName1" value="Socket problem" name="problems[]" />
          Socket problem
          </Label>
          </FormGroup>
          <FormGroup check>
          <Label check>
          <Input type="checkbox" id = "txtName2" value="Fan dimmer is not working properly" name="problems[]" />
          Fan dimmer is not working properly
          </Label>
          </FormGroup>
          <FormGroup check>
          <Label check>
          <Input type="checkbox" id = "txtName3" value="Lines fault detection" name="problems[]" />
          Lines fault detection
          </Label>
          </FormGroup>
          <FormGroup check>
          <Label check>
          <Input type="checkbox" id = "txtName4" value="Light replacement" name="problems[]" />
          Light replacement
          </Label>
          </FormGroup>
          <FormGroup check>
          <Label check>
          <Input type="checkbox" id = "txtName5" value="Installation of a conduit" name="problems[]" />
          Installation of a conduit
          </Label>
          </FormGroup>
          <FormGroup check>
          <Label check value="Check me out">
          <Input type="checkbox"  id = "txtName6" value="UPS repairing" name="problems[]" />
          UPS repairing
          </Label>
          </FormGroup>
          <FormGroup check>
          <Label check>
          <Input type="checkbox" id = "txtName7" value="Generator/UPS connection" name="problems[]"  />
          Generator/UPS connection
          </Label>
          </FormGroup>
          <FormGroup check>
          <Label check>
          <Input type="checkbox" id = "txtName8" value="Fitting of lights" name="problems[]" />
          Fitting of lights
          </Label>
          </FormGroup>
          <FormGroup check>
          <Label check>
          <Input type="checkbox" id = "txtName9" value="Light holder replacement" name="problems[]" />
          Light holder replacement
          </Label>
          </FormGroup>
          <FormGroup check>
          <Label check>
          <Input type="checkbox" id = "txtName10" value="Fan installation" name="problems[]" />
          Fan installation
          </Label>
          </FormGroup>
          <FormGroup check>
          <Label check>
          <Input type="checkbox" id = "txtName11" value="LED rope light fixture" name="problems[]" />
          LED rope light fixture
          </Label>
          </FormGroup>
          <FormGroup check>
          <Label check>
          <Input type="checkbox" id = "txtName12" value="Circuit breaker tripping" name="problems[]" />
          Circuit breaker tripping
          </Label>
          </FormGroup>
          <FormGroup check>
          <Label check>
          <Input type="checkbox" id = "txtName13" value="Naked wires after renovation" name="problems[]" />
          Naked wires after renovation
          </Label>
          </FormGroup>
          <FormGroup check>
          <Label check>
          <Input type="checkbox" id = "txtName14" value="Smell is coming out of your switches" name="problems[]" />
          Smell is coming out of your switches
          </Label>
          </FormGroup>
          <FormGroup check>
          <Label check>
          <Input type="checkbox" id = "txtName15" value="New distribution box installation" name="problems[]" />
          New distribution box installation
          </Label>
          </FormGroup>
          <FormGroup check>
          <Label check>
          <Input type="checkbox" id = "txtName16" value="IT cable installation" name="problems[]" />
          IT cable installation
          </Label>
          </FormGroup>
          <FormGroup check>
          <Label check>
          <Input type="checkbox" id = "txtName17" value="Television cable installation" name="problems[]" />
          Television cable installation
          </Label>
          </FormGroup>
          <FormGroup check>
          <Label check>
          <Input type="checkbox" id = "txtName18" value="Fixing some new socket" name="problems[]" />
          Fixing some new socket
          </Label>
          </FormGroup>
          <FormGroup check>
          <Label check>
          <Input type="checkbox" id = "txtName19" value="Rope light designing for rooms" name="problems[]" />
          Rope light designing for rooms
          </Label>
          </FormGroup>
          <FormGroup check>
          <Label check>
          <Input type="checkbox" id = "txtName20" value="Refrigerator not working" name="problems[]" />
          Refrigerator not working
          </Label>
          </FormGroup>
          <FormGroup row>
          <Label for="exampleEmail2" sm={12}><a class="tooltip-test" title="Please specify"><b>Other</b></a></Label>
          <Col sm={12}>
          <Input type="text" id="exampleEmail2" id = "txtName31" placeholder="Problem/s" name="problems[]" />
          </Col>
          </FormGroup>
          </Col>
          <Col xs="12" sm="12" md="6" lg="4">
          <h4>Plumbing problems:</h4>
          <FormGroup check>
          <Label check>
          <Input type="checkbox" id = "txtName21" value="Pipeline blockage" name="problems[]"/>
          Pipeline blockage
          </Label>
          </FormGroup>
          <FormGroup check>
          <Label check>
          <Input type="checkbox" id = "txtName22" value="Water supply problem" name="problems[]"/>
          Water supply problem
          </Label>
          </FormGroup>
          <FormGroup check>
          <Label check>
          <Input type="checkbox" id = "txtName23" value="Installation of geazer" name="problems[]"/>
          Installation of geazer
          </Label>
          </FormGroup>
          <FormGroup check>
          <Label check>
          <Input type="checkbox" id = "txtName24" value="Installation od motor pump" name="problems[]"/>
          Installation od motor pump
          </Label>
          </FormGroup>
          <FormGroup check>
          <Label check>
          <Input type="checkbox" id = "txtName25" value="Repair of motor" name="problems[]"/>
          Repair of motor
          </Label>
          </FormGroup>
          <FormGroup check>
          <Label check>
          <Input type="checkbox" id = "txtName26" value="New motor belt required" name="problems[]"/>
          New motor belt required
          </Label>
          </FormGroup>
          <FormGroup check>
          <Label check>
          <Input type="checkbox" id = "txtName27" value="Broken tap" name="problems[]"/>
          Broken tap
          </Label>
          </FormGroup>
          <FormGroup check>
          <Label check>
          <Input type="checkbox" id = "txtName28" value="Replacement of tap" name="problems[]"/>
          Replacement of tap
          </Label>
          </FormGroup>
          <FormGroup check>
          <Label check>
          <Input type="checkbox" id = "txtName29" value="Comod tank repairing" name="problems[]"/>
          Comod tank repairing
          </Label>
          </FormGroup>
          <FormGroup check>
          <Label check>
          <Input type="checkbox" id = "txtName30" value="New basin fixture" name="problems[]"/>
          New basin fixture
          </Label>
          </FormGroup>
          <FormGroup row>
          <Label for="exampleEmail2" sm={12}><a class="tooltip-test" title="Please specify"><b>Other</b></a></Label>
          <Col sm={12}>
          <Input type="Problem/s"  id="txtName32" placeholder="Problem/s" name="problems[]"/>
          </Col>
          </FormGroup>
          </Col>
          <Col xs="12" sm="12" md="6" lg="4">
          <h4>Painter problems:</h4>
          <p>Any work can be done: charges for paint work will depend upon square feet as we charge Rs.8/sq.feet (From filling to coats of paint)</p>
          <FormGroup row>
          <Label for="exampleEmail2" sm={12}><a class="tooltip-test" title="Please specify"><b>Write your own painter problem(s)</b></a></Label>
          <Col sm={12}>
          <Input type="Problem/s"  id="txtName33" placeholder="Problem/s" name="problems[]"/>
          </Col>
          </FormGroup>
          <br/>
          <p><strong>Note: </strong> Price quoted does not include material.</p>
          </Col>
          </Row>
          </Container>
          </ModalBody>
          <ModalFooter>
          <Button color="primary" onClick={this.click}>Save Problems</Button>{' '}
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
          </Modal>
          <FormGroup>
          <Label for="exampleEmail">Name</Label>
          <Input type="name" name="name" id="exampleEmail" placeholder="Type your name" />
          </FormGroup>
          <FormGroup>
          <Label for="exampleNumber">Number</Label>
          <Input type="number" name="number" id="exampleNumber" placeholder="e.g. 0333-xxxxxxx" />
          </FormGroup>
          <FormGroup>
          <Label for="exampleText">Address</Label>
          <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>
          <Button color="primary" >Send message</Button>

          </Form>
          );
          }
          }

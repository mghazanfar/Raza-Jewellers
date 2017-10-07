import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './App.css';
import Logo from "./img/logo-2D.png";
import Logo3D from "./img/logo-3d.svg";
import Gold from "./img/gold.png";
import Diamond from "./img/diamond.png";
import Watches from "./img/watches.png";
import Pearl from "./img/pearl.png";
import Sale from "./img/sale.png";
import Logo1 from './img/logo1-white.svg';
import Facebook from './img/facebook.svg';
import Google from './img/google.svg';
import Instagram from './img/instagram.svg';
import Pinterest from './img/pinterest.svg';
import Twitter from './img/twitter.svg';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import Buttons from 'material-ui/Button';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    color:'white'
  },
});


export default class ItemName extends React.Component {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: '',
    currency: 'EUR',
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  render() {
      var style = {
     color: this.props.color,
     backgroundColor: this.props.bgColor,
     textAlign:'center',
   };
   if(this.props.divName=="Contact"){
    return (
      <div id="reviews">
      <Container>
        <img src={Logo} className="my-4" width="70px" height="110px" />
        <Row className="justify-content-center">
          <Col xs="2" sm="3" md="4" className="bb-black mb-4">
          </Col>
          <Col xs="8" sm="5" md="4">
            <h3 className="text-black text-uppercase">Contact us</h3>
          </Col>
          <Col xs="2" sm="3" md="4" className="bb-black mb-4">
          </Col>
        </Row>
      </Container>
      <div className="px-0 mt-5" style={{backgroundImage: "url(" + this.props.img + ")", backgroundSize:'cover',}}>
      <Container>
        <Row className="justify-content-center pt-5" >
          <Col xs="6" className="py-5">
            <Form>
              <TextField
                label="Name*"
                placeholder="Please enter your good name"
                multiline
                className={styles.textField}
                margin="normal"
                fullWidth={true}
              />
              <TextField
                label="Phone*"
                placeholder="Please enter your Phone number"
                multiline
                className={styles.textField}
                margin="normal"
                fullWidth={true}
              />
              <TextField
                label="Address*"
                placeholder="Please write your address here"
                multiline
                className={styles.textField}
                margin="normal"
                fullWidth={true}
              />
              <TextField
                label="Visiting Through (e.g. Facebook, Friend, etc.)*"
                placeholder="Facebook"
                multiline
                className={styles.textField}
                margin="normal"
                fullWidth={true}
                style={{marginTop:23}}
              />
            </Form>
          </Col>
          <Col xs="6" className="py-5">
            <Form style={{marginTop:22}}>
              <TextField
                id="date"
                label="Birthday*"
                type="date"
                defaultValue="2017-05-24"
                className={styles.textField}
                InputLabelProps={{
                shrink: true,
                }}
                fullWidth={true}
              />
              <TextField
                id="multiline-flexible"
                label="Multiline*"
                multiline
                fullWidth={true}
                value={this.state.multiline}
                onChange={this.handleChange('multiline')}
                style={styles.textField}
                rows={8}
                margin="normal"
              />

           </Form>
          </Col>
        </Row>
        <Row className="justify-content-end pb-5">
          <Col xs="3" className="text-right">
            <Buttons color="contrast">Submit</Buttons>
          </Col>
        </Row>
      </Container>
      </div>
      </div>
    );}
    else if(this.props.divName=="collections"){
     return (
       <div id="partners" style={{overflow:'hidden'}}>
         <Container>
           <img src={Logo} className="my-4" width="70px" height="110px" />
           <Row className="justify-content-center">
             <Col xs="2" sm="3" md="4" className="bb-black mb-4">
             </Col>
             <Col xs="8" sm="5" md="4">
               <h3 className="text-black text-uppercase">collections</h3>
             </Col>
             <Col xs="2" sm="3" md="4" className="bb-black mb-4">
             </Col>
           </Row>
           <Row>
            <Col xs="4" className="mt-5">
              <ul className="list-unstyled text-left pb-26">
                <li className="text-uppercase my-3"><a href="#" className="text-black"><h4>bridal jewellery</h4></a></li>
                <li className="text-uppercase my-3"><a href="#" className="text-black"><h4>diamond jewellery</h4></a></li>
                <li className="text-uppercase my-3"><a href="#" className="text-black"><h4>engagements</h4></a></li>
                <li className="text-uppercase my-3"><a href="#" className="text-black"><h4>bangles</h4></a></li>
                <li className="text-uppercase my-3"><a href="#" className="text-black"><h4>rings</h4></a></li>
                <li className="text-uppercase my-3"><a href="#" className="text-black"><h4>earings</h4></a></li>
                <li className="text-uppercase my-3"><a href="#" className="text-black"><h4>pendents</h4></a></li>
              </ul>
            </Col>
           </Row>
         </Container>
       </div>

     );}
     else if(this.props.divName=="About Us"){
      return (
      <div id="About Us" className="my-5">

        <Container>
          <Row className="justify-content-center">
            <Col xs="12"><div className="w-100 h-100" style={style, {backgroundImage: "url(" + this.props.img + ")", backgroundSize:'cover', position:'absolute'}}></div>
              <div style={{position:'relative'}}>
                <img src={Logo3D} className="my-4" width="60px" height="120px" />
              </div>
              <Container>
                <Row className="justify-content-center">
                  <Col xs="3" md="4" className="bb-white mb-4">
                  </Col>
                  <Col xs="5" sm="4" md="3" lg="2">
                    <h3 className="text-white">About Us</h3>
                  </Col>
                  <Col xs="3" md="4" className="bb-white mb-4">
                  </Col>
                  <Col xs="12">
                    <p className="text-center text-white">The organization started in 1980 by Mr. RAZA Mahmood. RAZA Jewellers, a premier "Pakistan's" jewelry manufacturer, is a full service production company assisting fine jewelry retailers and designers for over a quarter century. Our heritage and reputation for quality makes us the single best source for all of your jewelry manufacturing needs.</p>
                  </Col>
                  <Col xs="12">
                    <Button outline color="secondary" className="rounded-0 text-white mb-4">Find out More</Button>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    );}
     else if(this.props.divName=="Jewellery"){
      return (
    <div id="easy">
      <Container>
        <img src={Logo} className="my-4" width="70px" height="110px" />
        <Row className="justify-content-center">
          <Col xs="2" sm="3" md="4" className="bb-black mb-4">
          </Col>
          <Col xs="8" sm="5" sm="4" md="3">
            <h3 className="text-black text-uppercase">jewellery</h3>
          </Col>
          <Col xs="2" sm="3" md="4" className="bb-black mb-4">
          </Col>
        </Row>
        <Row className="justify-content-center my-5  no-gutters">
          <Col md="8" lg="5" className="">
            <a href="#"><img src={Gold} className="h-100 w-100 img-fluid" /></a>
          </Col>
          <Col lg="3" className="hidden-md-down">
            <Row>
              <a href="#"><img src={Diamond} className="h-100 w-100 img-fluid" /></a>
            </Row>
            <Row>
              <a href="#"><img src={Watches} className="w-100 img-fluid" /></a>
            </Row>
          </Col>
          <Col md="4" lg="4">
            <a href="#"><img src={Pearl} className="h-100 w-100 img-fluid" /></a>
          </Col>
          <Row md="12" lg="3" className="hidden-lg-up no-gutters">
            <Col xs="6">
              <a href="#"><img src={Diamond} className="h-75 w-100 img-fluid" /></a>
            </Col>
            <Col xs="6">
              <a href="#"><img src={Watches} className="w-100 h-75 img-fluid" /></a>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
      );}
     else if(this.props.divName=="Media"){
      return (
        <div id="tryUs">
          <Container>
            <img src={Logo} className="my-4" width="70px" height="110px" />
            <Row className="justify-content-center">
              <Col xs="2" sm="3" md="4" className="bb-black mb-4">
              </Col>
              <Col xs="8" sm="5" md="4">
                <h3 className="text-black text-uppercase">media</h3>
              </Col>
              <Col xs="2" sm="3" md="4" className="bb-black mb-4">
              </Col>
            </Row>
          </Container>
          <div className="container-fluid">
            <Row className="justify-content-center">
              <Col xs="12" className="my-4">
                <img src={this.props.img} className="img-fluid"/>
              </Col>
            </Row>
          </div>
          <Container>
            <Row className="justify-content-center">
              <Col xs="12" className="my-5">
                <img src={Sale} className="img-fluid"/>
              </Col>
            </Row>
          </Container>

        </div>

      );}
      else if(this.props.divName=="Footer"){
       return (
         <div id="about">
           <div  className="py-sm-5 py-0" style={style}>
             <br/>
               <Container>
                 <Row className="justify-content-center">
                   <Col xs="10" md="4" className="bb-white px-0 mb-5">
                    <ul className="list-unstyled text-center text-md-left text-grey">

                      <li><h4>Opening Hours</h4></li>
                      <li>11:30am to 9:00pm, Sunday Close</li>

                      <li className="mt-5"><h4>Contact</h4></li>
                      <li>razajewellers1980@gmail.com</li>
                      <li>+92423578133, +923219888863, +923214669924.</li>
                    </ul>
                   </Col>
                   <Col xs="12" md="4" className="px-md-0">
                    <img src={Logo3D} height="180px" width="180px" />
                    <img src={Logo1} className="mt-3 text-white" width="230px" />
                   </Col>
                   <Col xs="10" md="4" className="bt-white-md bb-white px-0 mb-5 mt-5 mt-md-0">
                    <ul className="list-unstyled text-center text-md-right text-grey mt-5 mt-md-0">
                    <li className=""><h4>Go Social</h4></li>
                    <li className="hidden-md-up">
                      <div className="pt-3 d-flex justify-content-between w-100 ml-auto">
                        <a href="https://www.facebook.com/razajewellers"><img src={Facebook} className="size-logo"/></a>
                        <a href="https://www.plus.google.com/u/2/111738976259678807436"><img src={Google} className="size-logo"/></a>
                        <a href="https://www.instagram.com/razajewellers"><img src={Instagram} className="size-logo"/></a>
                        <a href="https://www.pinterest.com/razajewellers"><img src={Pinterest} className="size-logo"/></a>
                        <a href="https://www.twitter.com/razajewellers"><img src={Twitter} className="size-logo"/></a>
                      </div>
                    </li>
                    <li className="hidden-sm-down">
                      <div className="pt-3 d-flex justify-content-between w-75 ml-auto">
                        <a href="https://www.facebook.com/razajewellers"><img src={Facebook} className="size-logo"/></a>
                        <a href="https://www.plus.google.com/u/2/111738976259678807436"><img src={Google} className="size-logo"/></a>
                        <a href="https://www.instagram.com/razajewellers"><img src={Instagram} className="size-logo"/></a>
                        <a href="https://www.pinterest.com/razajewellers"><img src={Pinterest} className="size-logo"/></a>
                        <a href="https://www.twitter.com/razajewellers"><img src={Twitter} className="size-logo"/></a>
                      </div>
                    </li>

                      <li className="mt-3"><h4>Store</h4></li>
                      <li className="mt-3">Building Sunfort Hotel, 24-G, Liberty Market,Gulberg III, Lahore</li>


                      </ul>
                   </Col>

                 </Row>
               </Container>
               </div>
            </div>
       );}
  }
}

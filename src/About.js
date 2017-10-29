import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './App.css';
import { Button } from 'reactstrap';
import Slick from './SlickCarousel';
import ItemName from './ItemName';
import About from './img/cover.png';
import Strips from './img/strips.png';
import Soon from './img/SOON.png';
import Store from './img/shop.png';
import Founder from './img/founder.png';
import Team from './img/team.png';
import Combo from './img/combo.png';
import Craftsman from './img/craftsman.png';
import Logo3D from "./img/logo-3d.svg";




class Root extends Component {
  render() {
    return (
      <div id="top" style={{textAlign:'center'}}>

      <div className="bgAbout">
        <Container>
          <img src={Logo3D} width='70px' height='110px' className="mt-4"/>
          <Row className="justify-content-center mt-4">
            <Col  className="bb-white mb-4">
            </Col>
            <Col xs="3">
              <h3 className="text-white text-uppercase">About us</h3>
            </Col>
            <Col className="bb-white mb-4">
            </Col>
          </Row>
          <Row>
            <Col  className="mt-4 mb-5">
              <p className='AboutColor'>The organization started in 1980 by Mr. RAZA Mahmood. RAZA Jewellers, a premier Pakistans jewelry manufacturer, is a full service production company assisting fine jewelry retailers and designers for over a quarter century. Our heritage and reputation for quality makes us the single best source for all of your jewelry manufacturing needs. We are committed to helping our customers create fine custom designed jewelry that exceeds their expectations. We do that by providing the highest level of service and talent available in the marketplace. With the passage of time and requirements of the era, the finished form of manufactured jewelry was well appreciated by clients and the company makes its place in the market. The company is also serving the upper class with the customization facility.</p>
            </Col>
          </Row>
          <Row className='align-items-center'>
            <Col  lg="7" className="my-4">
              <h1 className='text-white text-uppercase'>raza mehmood</h1>
              <h6 className='text-white text-uppercase mx-auto'>founder</h6>
              </Col>
            <Col lg="5" className="my-5">
              <img src={Founder} className='img-fluid'/>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Row className='align-items-center my-5 '>
          <Col  lg="12" className="my-5 px-0">
            <img src={Combo} className='img-fluid'/>
          </Col>
        </Row>
      </Container>

      <Container>
        <div className='bg-black my-5'>
        <img src={Craftsman} className='w-50 h-50'/>
        </div>
        <p>RAZA jewelers is the brain child Mr RAZA,who dared to dream big almost 25 years  ago and with conviction set it on a roll with untarnished service. .The impeccable  quality has allowed to grow  par with international standrds of designing and  manufacturing and stringent quality control measures. Deligentally  administrated by the brothers, Hanif jewellers has today become a  Jeweller with a difference.They are  known for its bold,distinctive  designs ,especially it’s architectural styles featuring heavy gold links and it’s  creative use of coloured stones.   Hailed as eternal silvers of moonshine ,diamonds are one of the most sought after  gems,embodying Power,Passion,Previlage. Using the hardest substance borne from  the darkest core of the earth, RAZA Jewellers has imbibed the timeless magic and  romance that only diamonds can recreate.</p>
      </Container>

      <ItemName  color="black" bgColor="white" divName="Map" />

      <ItemName   color="black" bgColor="#272727" divName="Footer"/>

      </div>
    );
  }
}

export default Root;

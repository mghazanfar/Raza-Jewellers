import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './App.css';
import { Button } from 'reactstrap';
import Buttons from 'material-ui/Button';
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
import Scrollchor from 'react-scrollchor';
import LimitedInfiniteScroll from 'react-limited-infinite-scroll'

const tileData = [
   {
   img: Founder,
 },
   {
   img:  Founder,
  },
  {
  img:  Founder,
  },
  {
  img:  Founder,
  },
  {
  img:  Founder,
  },{
  img: Founder,
},
  {
  img:  Founder,
 },
 {
 img:  Founder,
 },
 {
 img:  Founder,
 },
 {
 img:  Founder,
 },{
 img: Founder,
},
 {
 img:  Founder,
},
{
img:  Founder,
},
{
img:  Founder,
},
{
img:  Founder,
},{
img: Founder,
},
{
img:  Founder,
},
{
img:  Founder,
},
{
img:  Founder,
},
{
img:  Founder,
},
    ];

 const items = tileData.map((tile, index) => {
     return (
       <Col md="3" lg="4" className="mb-5" key={index}>
         <div className="containered">
           <img src={tile.img} alt="Avatar" className="image w-100" />
           <div className="middle">
             <div className="text">John Doe</div>
           </div>
         </div>
       </Col>
     )
 })
 const total= items.length;

class Bridal extends Component {

  render() {
    return (
      <div id="top" style={{textAlign:'center'}}>

      <div className="container-fluid">
        <Row className="justify-content-center">
          <Col xs="12" className="my-4 px-0">
            <img src={Soon} className="w-100"/>
          </Col>
        </Row>
      </div>

      <Container className="text-center">
        <div className="my-4 d-inline-block">
          <Scrollchor to="#top" animate={{offset: -50, duration: 800}}>
            <div className="logoMain"></div>
           </Scrollchor>
         </div>
        <Row className="justify-content-center">
          <Col xs="2" sm="3" md="5" className="bb-black mb-4">
          </Col>
          <Col xs="8" sm="5" sm="4" md="2">
            <h3 className="text-black text-uppercase">Bridal</h3>
          </Col>
          <Col xs="2" sm="3" md="5" className="bb-black mb-4">
          </Col>
        </Row>


        <LimitedInfiniteScroll
          limit={3}
          hasMore={total === undefined || items.length < total}
          spinLoader={<div className="loader">Loading...</div>}
          mannualLoader={<Buttons>Load More</Buttons>}
          noMore={<div className="loader">No More Items</div>}
          loadNext={this.loadNextFunc}>
          <Row className="justify-content-center my-5">
            {items}
          </ Row>
        </LimitedInfiniteScroll>
      </Container>

      <ItemName   color="black" bgColor="#272727" divName="Footer"/>

      </div>
    );
  }
}

export default Bridal;

import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './App.css';
import { Button } from 'reactstrap';
import Buttons from 'material-ui/Button';
import Slick from './SlickCarousel';
import ItemName from './ItemName';
import About from './img/cover.png';
import Strips from './img/strips.png';
import Banner from './img/RingBanner.jpg';
import Store from './img/shop.png';
import Founder from './img/founder.png';
import Ring1 from './img/Ring1.jpg';
import Ring2 from './img/Ring2.jpg';
import Team from './img/team.png';
import Combo from './img/combo.png';
import Craftsman from './img/craftsman.png';
import Logo3D from "./img/logo-3d.svg";
import Scrollchor from 'react-scrollchor';
import LimitedInfiniteScroll from 'react-limited-infinite-scroll'

const tileData = [
   {
   img: Ring1,  name: 'Band Ring'
 },
   {
   img: Ring2, name: 'Band Ring'
  },
  {
  img: Ring1, name: 'Band Ring'
  },
  {
  img: Ring2, name: 'Band Ring'
  },
    ];

 const items = tileData.map((tile, index) => {
     return (
       <Col xs="12" md="5" className="mb-5" key={index}>
         <div className="containered">
           <img src={tile.img} alt="Avatar" className="image w-100" />
           <div className="middle">
            <img src={Logo3D} width="70px" height="110px" />
             <div className="text">{tile.name}</div>
           </div>
         </div>
       </Col>
     )
 })
 const total= items.length;
 const fetchMore= items;


 const loadMoreRows = () => fetchMore({
 			items
    })

class Bridal extends Component{


  render() {
    return (
      <div id="top" style={{textAlign:'center'}}>

      <div className="container-fluid">
        <Row className="justify-content-center">
          <Col xs="12" className="my-4 px-0">
            <img src={Banner} className="w-100"/>
          </Col>
          <Col xs="8" className="my-4 px-0">
            <h6>RAZA JEWELLERS designer rings are the qunitessence of jewellery design. either in plain gold, or crafted with precious stone, diamond rings or ancient coins, they combine refined elegance with strong determination.</h6>
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
          noMore={<div className="loader"></div>}
          loadNext={loadMoreRows}
          >
          <Row className="justify-content-around my-5">
            {items}
          </ Row>
        </LimitedInfiniteScroll>

        <Row className="justify-content-center my-5">
          <Buttons>Load More</Buttons>
        </ Row>
      </Container>

      <ItemName   color="black" bgColor="#272727" divName="Footer"/>

      </div>
    );
  }
}

export default Bridal;

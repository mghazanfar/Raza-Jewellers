import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';
import Slick from './SlickCarousel';
import ItemName from './ItemName';
import About from './img/cover.png';
import Strips from './img/strips.png';
import Soon from './img/SOON.png';
import Store from './img/store.png';




class Root extends Component {
  render() {
    return (
      <div className="App" id="top">

        <Slick className="mt-5 mt-md-0"/>

        <ItemName  className="mt-6" text="About Us" color="#fff" bgColor="#271A00" divName="About Us" img={About}/>

        <ItemName  color="black" bgColor="white" divName="Jewellery"/>

        <ItemName  color="black" bgColor="white" divName="collections" img={Strips}/>

        <ItemName  color="black" bgColor="white" divName="Media" img={Soon}/>

        <ItemName  color="black" bgColor="white" divName="Contact" img={Store}/>

        <ItemName   color="black" bgColor="#272727" divName="Footer"/>

      </div>
    );
  }
}

export default Root;

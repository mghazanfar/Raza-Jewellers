import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import ItemName from './ItemName';
import AboutUs from './img/cover.png';
import StoreSmall from './img/storeSmall.png';




class AboutUs extends Component {
  render() {
    return (
      <div id="top">

        <Navbar/>

        <Navbar2 className=""/>

        <ItemName  className="mt-6" text="About Us" color="#fff" bgColor="#271A00" divName="AboutUsBig" img={AboutUs}/>

        <ItemName color="black" bgColor="#272727" divName="Team" img={StoreSmall}/>

        <ItemName color="black" bgColor="#272727" divName="Craftsman"/>

        <ItemName color="black" bgColor="#272727" divName="Footer"/>

      </div>
    );
  }
}

export default AboutUs;

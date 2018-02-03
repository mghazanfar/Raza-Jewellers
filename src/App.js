import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import Root from './Root';
import Slick from './SlickCarousel';
import ItemName from './ItemName';
import About from './img/cover.png';
import Strips from './img/strips.png';
import Soon from './img/SOON.png';
import Store from './img/store.png';
import ScrollableAnchor from 'react-scrollable-anchor';
import {
 BrowserRouter as Router
} from 'react-router-dom';
import Logo3D from "./img/logo-3d.svg";



class App extends Component {


  render() {
    return (

    <Router>
      <div id="top">

        <Navbar/>

        <Navbar2 className=""/>

      </div>
    </Router>
    );
  }
}

export default App;

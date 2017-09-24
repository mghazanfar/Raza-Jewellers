import React, { Component } from 'react';
import logo from './servMate-logo.png';
import './App.css';
import { Button } from 'reactstrap';
import Navbar from './Navbar';
import Slick from './SlickCarousel';
import ItemName from './ItemName';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <ItemName text="Reviews" color="red" bgColor="black" divName="Settings"/>
        <ItemName  color="white" bgColor="red" divName="Footer"/>
      </div>
    );
  }
}

export default App;

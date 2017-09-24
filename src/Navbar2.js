import React from 'react';
import Partner from './Partner';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './App.css';
import Logo2 from './img/logo-2.svg';
import Scrollchor from 'react-scrollchor';
import Navbar from './Navbar';
import Root from './Root';
import About from './About';
import Jewellery from './Jewellery';
import Collections from './Collections';
import Slick from './SlickCarousel';
import ItemName from './ItemName';
import {
 Route,
 NavLink
} from 'react-router-dom';

export default class Navbarr extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {

      var style = {
     color: 'dodgerblue'
   };
    return (
        <div>
          <nav className="navbar navbar-toggleable-sm navbar-light justify-content-center align-items-start pt-0">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
              <div className="d-flex w-100 justify-content-around">

                <div className="ml-md-3 ml-lg-0">
                  <NavLink  to="/about" className="navbar-brand text-uppercase margin-0">About Us</NavLink >
                  <NavLink  to="/jewellery" className="navbar-brand text-uppercase margin-0">Jewellery</NavLink >
                  <NavLink  to="/collections" className="navbar-brand text-uppercase margin-0">Collections</NavLink >

                </div>
                <div className="d-flex align-items-center">
                  <NavLink  to="/"><img src={Logo2} width="300" className="d-inline-block align-top" alt=""/></NavLink >
                </div>

              <div className="d-flex ml-md-3 ml-lg-0">
                  <Scrollchor to="#services" animate={{offset: -50, duration: 800}}  className="navbar-brand text-uppercase margin-0">Media</Scrollchor>
                  <Scrollchor to="#services" animate={{offset: -50, duration: 800}}  className="navbar-brand text-uppercase margin-0">promotions</Scrollchor>
                  <Scrollchor to="#services" animate={{offset: -50, duration: 800}}  className="navbar-brand text-uppercase margin-0">Follow Us</Scrollchor>
              </div>


            </div>
          </nav>
          <Route exact path="/" component={Root}/>
          <Route path="/about" component={About} />
          <Route path="/jewellery" component={Jewellery}/>
          <Route path="/collections" component={Collections}/>
        </div>
    );
  }
}

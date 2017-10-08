import React from 'react';
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
          <nav className="navbar navbar-light justify-content-center align-items-center pt-0 hidden-nav2">

              <div className="d-inline-flex">
                <div className="ml-md-3 ml-lg-0">
                  <NavLink  to="/about" className="navbar-brand text-uppercase mr--0">About Us</NavLink >
                  <NavLink  to="/jewellery" className="navbar-brand text-uppercase mr--0">Jewellery</NavLink >
                  <NavLink  to="/collections" className="navbar-brand text-uppercase  mr--0">Collections</NavLink >

                </div>
                <div className="d-flex align-items-center">
                  <NavLink  to="/"><img src={Logo2} width="400" className="d-inline-block align-top marginImg" alt=""/></NavLink >
                </div>

              <div className="d-flex ml-md-3 ml-lg-0">
                  <Scrollchor to="#media" animate={{offset: -50, duration: 800}}  className="navbar-brand text-uppercase  mr--0">Media</Scrollchor>
                  <Scrollchor to="#promotions" animate={{offset: -50, duration: 800}}  className="navbar-brand text-uppercase  mr--0">promotions</Scrollchor>
                  <Scrollchor to="#footer" animate={{offset: -50, duration: 800}}  className="navbar-brand text-uppercase  mr--0">Follow Us</Scrollchor>
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

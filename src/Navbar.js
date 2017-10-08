import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './App.css';
import Logo1 from './img/logo-1.svg';
import Map from './img/map.svg';
import Scrollchor from 'react-scrollchor';
import {
 Route,
 NavLink
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

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

    <div className="">

      <nav className="navbar navbar-toggleable-md navbar-light align-items-start pb-0 hidden-md-down">

        <div className="d-flex w-100 justify-content-between">
          <div className="d-flex">
            <Scrollchor to="#store" animate={{offset: -50, duration: 800}}  className="navbar-brand mt-md-3"><img src={Map} width="22px" height="19px" style={{marginBottom:5, marginRight:"1rem"}} />Store</Scrollchor>
          </div>

          <div className="d-flex align-items-center" style={{marginLeft:'9rem'}}>
            <NavLink  to="/"><img src={Logo1} width="300" height="150" className="d-inline-block align-top" alt=""/></NavLink>
          </div>

          <div className="d-flex">
            <div>
              <Scrollchor to="#contact" animate={{offset: -50, duration: 800}}  className="navbar-brand mt-md-3">Contact Us</Scrollchor>
            </div>
              <TextField
                id="search"
                label="Search"
                type="search"
                className={styles.textField}
                margin="none"
                style={{width:100, color:'black'}}
                fullWidth={true}
              />
          </div>
        </div>
      </nav>

      <nav role="navigation" className="navbar navbar-toggleable-md navbar-light bg-white hidden-lg-up fixed-top" style={{opacity:0.8}}>
        <button className="navbar-toggler navbar-toggler-left" type="button" data-toggle="collapse" data-target="#navbarNav"  aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <NavLink  to="/"><img src={Logo1} width="200" height="70" className="d-inline-block align-top" alt=""/></NavLink>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav navbar-nav text-left">
            <li className="nav-item active">
            <TextField
              id="search"
              label="Search"
              type="search"
              className={styles.textField}
              margin="none"
              fullWidth={true}
            />
            </li>
            <li className="nav-item">
              <NavLink  to="/about" className="navbar-brand text-uppercase mr--0 mt-3 textUnderline">About Us</NavLink >
            </li>
            <li className="nav-item">
              <NavLink  to="/jewellery" className="navbar-brand text-uppercase mr--0 textUnderline">Jewellery</NavLink >
            </li>
            <li className="nav-item">
              <NavLink  to="/collections" className="navbar-brand text-uppercase  mr--0 textUnderline">Collections</NavLink >
            </li>
            <li className="nav-item">
              <Scrollchor to="#media" animate={{offset: -50, duration: 800}}  className="navbar-brand text-uppercase  mr--0 textUnderline">Media</Scrollchor>
            </li>
            <li className="nav-item">
              <Scrollchor to="#promotions" animate={{offset: -50, duration: 800}}  className="navbar-brand text-uppercase  mr--0 textUnderline">promotions</Scrollchor>
            </li>
            <li className="nav-item">
              <Scrollchor to="#footer" animate={{offset: -50, duration: 800}}  className="navbar-brand text-uppercase  mr--0 textUnderline">Follow Us</Scrollchor>
            </li>
            <li className="nav-item">
              <Scrollchor to="#store" animate={{offset: -50, duration: 800}}  className="navbar-brand textUnderline mt-3">Store</Scrollchor>
            </li>
            <li className="nav-item">
              <Scrollchor to="#contact" animate={{offset: -50, duration: 800}}  className="navbar-brand textUnderline">Contact Us</Scrollchor>
            </li>
          </ul>
        </div>
      </nav>


    </div>
    );
  }
}

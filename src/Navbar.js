import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './App.css';
import Logo1 from './img/logo-1.svg';
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

      <nav className="navbar navbar-toggleable-md navbar-light align-items-start pb-0">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="d-flex w-100 justify-content-between">
        <div className="d-flex">
          <Scrollchor to="#services" animate={{offset: -50, duration: 800}}  className="navbar-brand mt-md-3">Store</Scrollchor>
          <Scrollchor to="#services" animate={{offset: -50, duration: 800}}  className="navbar-brand mt-md-3">My Account</Scrollchor>
        </div>

        <div className="d-flex align-items-center">
          <NavLink  to="/"><img src={Logo1} width="300" height="150" className="d-inline-block align-top" alt=""/></NavLink>
        </div>

        <div className="d-flex">
          <div>
            <Scrollchor to="#services" animate={{offset: -50, duration: 800}}  className="navbar-brand mt-md-3">Contact Us</Scrollchor>
          </div>
            <TextField
              id="search"
              label="Search"
              type="search"
              className={styles.textField}
              margin="none"
              style={{width:50, color:'black'}}
              fullWidth={true}
            />
        </div>
        </div>


      </nav>

    </div>
    );
  }
}

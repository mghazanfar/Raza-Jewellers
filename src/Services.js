import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import './App.css';


export default class Services extends React.Component{
  render() {
  return (
    <div>
      <h3>{this.props.title}</h3>
      <p>{this.props.details}</p>
    </div>
  );
}
}

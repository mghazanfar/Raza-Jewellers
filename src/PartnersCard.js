import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import './App.css';


export default class PartnersCard extends React.Component{
  render() {
  return (
    <div>
      <Card block inverse className="radiusZero borderLeft text-left" style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle className="pt-2 cursor">{this.props.title} <img className="ml-2" src={this.props.src} width="70px"/></CardTitle>
        <CardText className="pb-4 text-white cursor">{this.props.details}
        </CardText>
        
      </Card>
    </div>
  );
}
}

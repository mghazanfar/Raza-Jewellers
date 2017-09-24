import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay,CardFooter } from 'reactstrap';
import "./App.css";

export default class SettingCard extends React.Component{
  render() {
  return (
    <div id="reviews">
      <Card className="noBorder fancy-tile" style={{backgroundImage: "url(" + this.props.img + ")"}}>
        <CardImgOverlay className="fancy-tile-content">
          <CardTitle className="mt-2 display-4 text-dodge"><b>{this.props.title}</b></CardTitle>
          <CardText className="mt-2 display-6 text-white"><b>{this.props.details}</b></CardText>
        </CardImgOverlay>
        <CardImgOverlay className="fancy-tile-content-hover">
        <CardTitle className="mt-2 display-4" style={{color: "black"}}>{this.props.titleHover}</CardTitle>
        <CardText className="mt-2 display-6 text-white">{this.props.detailsHover}</CardText>
        </CardImgOverlay>
      </Card>
      <CardFooter className="radiusZero">
      <div className="ml-minus11">
      <img width="10%" className="borderRadius" src={this.props.logo} />
      </div>
      </CardFooter>
    </div>
  );
}
}

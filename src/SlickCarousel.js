import React from 'react';
import Carousel from 'nuka-carousel';
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import imge1 from "./img/slidder.jpg";
import imge2 from "./img//slider2.jpg";
import imge3 from "./img/slider3.jpg";
import Right from "./img/right.svg";
import Left from "./img/left.svg";


export default class SimpleSlider extends React.Component {

  render() {
    var settings = {
      touchMove:true,
      swipe:true,
      swipeToSlide:true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      fade: true,
      cssEase: 'linear'
    };

    var Decorators = [{
        component: React.createClass({
          render() {
            return (
              <button style={{
              padding: 20,
              border:0,
              backgroundColor:'transparent',
            outline:0}}
                onClick={this.props.previousSlide}>
                <svg src={Right} style={{width:70, height:70, cursor:'pointer'}} />
              </button>
            )
          }
        }),
        position: 'CenterRight',
        style: {
        	padding: 0,
        }
      },
      {
          component: React.createClass({
            render() {
              return (
                <button style={{
                padding: 20,
                border:0,
                backgroundColor:'transparent',
              outline:0}}
                  onClick={this.props.previousSlide}>
                  <svg src={Left} style={{ width:70, height:70, cursor:'pointer'}} />
                </button>
              )
            }
          }),
          position: 'CenterLeft',
          style: {
          	padding:0,
          }
        }
    ];

    return (
      <div className="">
        <Carousel autoplay={true} wrapAround={true} autoplayInterval={4000} decorators={Decorators}>
          <img src={imge1} onLoad={() => {window.dispatchEvent(new Event('resize'));}}/>
          <img src={imge2} onLoad={() => {window.dispatchEvent(new Event('resize'));}}/>
          <img src={imge3} onLoad={() => {window.dispatchEvent(new Event('resize'));}}/>
        </Carousel>
      </div>
    );
  }
}

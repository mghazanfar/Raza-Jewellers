import React from 'react';
import Carousel from 'nuka-carousel';
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import imge1 from "./img/slidder.jpg";
import imge2 from "./img//slider2.jpg";
import imge3 from "./img/slider3.jpg";


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
    return (
      <div className="">
        <Carousel autoplay={true} wrapAround={true} autoplayInterval={4000}>
          <img src={imge1}/>
          <img src={imge2}/>
          <img src={imge3}/>
        </Carousel>
      </div>
    );
  }
}

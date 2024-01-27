import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../../Style/Components/CarrouselStyle.css"

import spider from "../../imgs/SpiderMan.gif"
import catWar from "../../imgs/CatWar.jfif"
import padrinho from "../../imgs/Padrinhos.jfif"


export const CarrouselComponents= () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    arrows: false,
    swipe: true,
    easing: 'ease',
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="carousel-slide">
        <img src={spider} alt="Spider-Man" className="carousel-image" />
      </div>
      <div className="carousel-slide">
        <img src={catWar} alt="CatWar" className="carousel-image" />
      </div>
      <div className="carousel-slide">
        <img src={padrinho} alt="Padrinhos" className="carousel-image" />
      </div>
    </Slider>
  );
};

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Style/Components/CarrouselStyle.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const NexArrow = ({ onClick }) => (
  <div className="custom-arrow next" onClick={onClick}>
    <FaArrowRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev" onClick={onClick}>
    <FaArrowLeft />
  </div>
);

export const CarrouselComponents = () => {
  const handleDevDojoYoutube = () => {
    let url = "https://www.youtube.com/channel/UCjF0OccBT05WxsJb2zNkL4g";
    window.open(url, "_blank");
  };

  const handleGuanabaraAlgoritmoYoutube = () => {
    let url = "https://youtu.be/8mei6uVttho?si=_gJroMsl6UqwIBqG";
    window.open(url, "_blank");
  };

  const handleCursoInC = () => {
    let url = "https://youtu.be/r0UR9Bdcpic?si=SVrnkkUnu7eYGFzT";
    window.open(url, "_blank");
  };

  const handleSqlYoutube = () => {
    let url = "https://youtu.be/adIIAEc3Q04?si=9qb5UdKvtZTZ73Zo"
    window.open(url, '_blank')
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NexArrow />,
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
    <div>
      <Slider {...settings}>
        <div className="carousel-slide">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWpMEpHDSQ5HjqwCeHqQ7zYfpL2xe-0ouQ1-l254DLM7_CUYkUE8jzuBZFnp-C9ueYVi4&usqp=CAU"
            alt="DevDojo"
            onClick={handleDevDojoYoutube}
            className="carousel-image"
            data-tip
            data-for="spider-tooltip"
          />
        </div>
        <div className="carousel-slide">
          <img
            src="https://i.ytimg.com/vi/8mei6uVttho/sddefault.jpg"
            alt="Gustavo Guanabara"
            className="carousel-image"
            data-tip
            onClick={handleGuanabaraAlgoritmoYoutube}
            data-for="catwar-tooltip"
          />
        </div>
        <div className="carousel-slide">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh_PgEZjN8NtNaCrRkHlit3uLZm6tREMwAWA&usqp=CAU"
            alt="Lenguage C"
            className="carousel-image"
            data-tip
            onClick={handleCursoInC}
            data-for="padrinho-tooltip"
          />
        </div>
        <div className="carousel-slide">
          <img
            src="https://www.stonebranch.com/integration-hub/media/3c/64/66/1636642258/Stonebranch_SQL_Vendor_Product_Logo.svg"
            alt="Lenguage C"
            className="carousel-image"
            data-tip
            onClick={handleSqlYoutube}
            data-for="padrinho-tooltip"
          />
        </div>
      </Slider>
    <hr/>
    </div>
  );
};

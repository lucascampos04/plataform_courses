// CarrouselComponents.js
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Style/Components/CarrouselStyle.css";
import spider from "../../imgs/SpiderMan.gif";
import catWar from "../../imgs/CatWar.jfif";
import padrinho from "../../imgs/Padrinhos.jfif";
import PreviewTooltipVide from "../PreviewVideos/PreviewTooltip";
import VideoPreview from "../PreviewVideos/VideoPreview ";

export const CarrouselComponents = () => {
  const [maximizedVideo, setMaximizedVideo] = useState(null);
  const [timerActive, setTimerActive] = useState(false);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    swipe: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const videos = {
    spider: "https://www.youtube.com/embed/mQwdNHusFLU?si=elqD_yscHT34JUPm", // Use a URL embed do YouTube
    catWar: "https://www.example.com/catwar_video.mp4",
    padrinho: "https://www.example.com/padrinho_video.mp4",
  };

  const handleClick = (videoUrl) => {
    setMaximizedVideo(videoUrl);
  };

  const handleClose = () => {
    setMaximizedVideo(null);
    setTimerActive(false)
   };

   useEffect(() => {
    let timeoutId

    if (timerActive){
        timeoutId = setTimeout(() => {
            setMaximizedVideo(null)
            setTimerActive(false)
        }, 500)
    }

    return () => {
        clearTimeout(timeoutId)
    }
   }, [maximizedVideo, timerActive])


  return (
    <div>
      <Slider {...settings}>
        <div
          className="carousel-slide"
          onClick={() => handleClick(videos.spider)}
        >
          <img
            src={spider}
            alt="Spider-Man"
            className="carousel-image"
            data-tip
            data-for="spider-tooltip"
          />
        </div>
        <div
          className="carousel-slide"
          onClick={() => handleClick(videos.catWar)}
        >
          <img
            src={catWar}
            alt="CatWar"
            className="carousel-image"
            data-tip
            data-for="catwar-tooltip"
          />
        </div>
        <div
          className="carousel-slide"
          onClick={() => handleClick(videos.padrinho)}
        >
          <img
            src={padrinho}
            alt="Padrinhos"
            className="carousel-image"
            data-tip
            data-for="padrinho-tooltip"
          />
        </div>
      </Slider>

      {maximizedVideo && (
        <div className="maximized-video-container">
          <div className="close-button" onClick={handleClose}>
            X
          </div>
          <VideoPreview videoUrl={maximizedVideo} />
        </div>
      )}

      <PreviewTooltipVide
        id="spider-tooltip"
        content={<VideoPreview videoUrl={videos.spider} />}
      />
      <PreviewTooltipVide
        id="catwar-tooltip"
        content={<VideoPreview videoUrl={videos.catWar} />}
      />
      <PreviewTooltipVide
        id="padrinho-tooltip"
        content={<VideoPreview videoUrl={videos.padrinho} />}
      />
    </div>
  );
};

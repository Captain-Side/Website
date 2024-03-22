// Latest.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LatestData from "./LatestData.jsx";
import './Latest.css'; // Import your CSS file for styling

const Latest = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Auto-advance every 3 seconds
    arrows: false, // Hide next/prev arrows
    pauseOnHover: false,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {LatestData.items.map((item, index) => (
          <div key={index}>
            <img src={item.src} alt="" className="full-width-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Latest;

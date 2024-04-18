import React, { useState, useEffect } from 'react';
import LatestData from "./LatestData.jsx";
import './Latest.css'; // Import your CSS file for styling

const Latest = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const refreshInterval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(refreshInterval);
    };
  }, []);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % LatestData.items.length);
  };

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= LatestData.items.length) {
      newIndex = LatestData.items.length - 1;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div className="slider">
      <div className='list'>
        {LatestData.items.map((item, index) => (
          <div className={`item ${index === activeIndex ? 'active' : ''}`} key={index}>
            <img src={item.src} alt="" className="full-width-image" />
          </div>
        ))}
      </div>
      <div className="carousel-buttons">
        <div className="indicators">
          {LatestData.items.map((item, index) => (
            <ul key={index}><li className={index === activeIndex ? "active" : null}></li></ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Latest;

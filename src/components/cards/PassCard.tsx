import React from 'react';
import './PassCard.css';

export const PassCard = () => {
  return (
    <div className="image-container">
      {Array.from({ length: 5 }).map((_, index) => (
        <div className="flip-container" key={index}>
          <img className='img-1' src={`/assets/NFT-Card_0${index + 1}000.png`} alt="" />
          <img className="alternate-image" src="/assets/gamepic.jpg" alt="" />
        </div>
      ))}
    </div>
  );
};


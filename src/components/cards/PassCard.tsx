
import React, { useState } from 'react';
import './PassCard.css';

export const PassCard = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleImageClick = (index) => {
    setFlippedIndex(index === flippedIndex ? null : index);
  };

  return (
    <div className="scroll-container">
      <div className="image-container">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className={`flip-container ${index === flippedIndex ? 'is-flipped' : ''}`}
            onClick={() => handleImageClick(index)}
          >
            <img className="img-1" src={`/assets/NFT-Card_0${index + 1}000.png`} alt="" />
            <img className="flipped-image" src="/assets/gamepic.jpg" alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};




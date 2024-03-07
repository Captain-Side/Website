import React, { useState } from 'react';
import './PassCard.css';
import passcardData from '../../components/cards/PassCardData';

export const PassCard = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleImageClick = (index) => {
    setFlippedIndex(index === flippedIndex ? null : index);
  };

  return (
    <div className="scroll-container">
      <div className="image-container">
        {passcardData.games.map((game, index) => (
          <div
            key={game.id}
            className={`flip-container ${index === flippedIndex ? 'is-flipped' : ''}`}
            onClick={() => handleImageClick(index)}
          >
            <img className="img-1" src={game.img} alt="" />
            <img className="flipped-image" src="/assets/gamepic.jpg" alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

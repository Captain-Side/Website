

import React, { useState } from 'react';
import data from './data';
import './gameTest.css';

const GameTest = () => {
  const [visibleCards, setVisibleCards] = useState(3);

  const loadMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 3);
  };

  const visibleSlice = data.cardData.slice(0, visibleCards);

  return (
    <section className='py-3 container' style={{ backgroundColor: '' }}>
      <div className='d-flex justify-content-between align-items-center'>
        <h1 className="title">
          <span className="live">LIVE</span> <span className="events">EVENTS</span>
        </h1>
        {visibleCards < data.cardData.length && (
          <button
            className='btn btn-dark-purple'
            onClick={() => loadMore()}
          >
            View More
          </button>
        )}
      </div>

      <div className='row'>
        {visibleSlice.map((item) => (
          <div key={item.id} className='col-12 col-md-6 col-lg-4 mb-4'>
            <div className='card p-0 overflow-hidden h-100 shadow'>
              <img src={item.img} alt={`Event ${item.id}`} className='card-img-top' />
              <div className='card-body'>
                <h5 className='card-title'>{item.title}</h5>
                <p className='desc-text'>{item.desc}</p>
                <div className='button-container'>
                  <a href={item.link} className='action-button action-button-battle' target='_blank' rel='noopener noreferrer'>
                    Battle
                  </a>
                  <button className='action-button action-button-watch'>Watch Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GameTest;

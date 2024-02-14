import React, { useState } from 'react';
import gameData from './GameData';
import './gameTest.css';

const LiveEvents = () => {
  const [visibleGames, setVisibleGames] = useState(3);

  const loadMore = () => {
    setVisibleGames(prevVisibleGames => prevVisibleGames + 3);
  };

  const loadLess = () => {
    setVisibleGames(prevVisibleGames => Math.max(prevVisibleGames - 3, 3)); // Ensure visibleGames doesn't go below 3
  };

  const visibleGamesSlice = gameData.games.slice(0, visibleGames);

  return (
    <section className='py-3 container' style={{ backgroundColor: '' }}>
      <div className='d-flex justify-content-between align-items-center view-more-container'>
        <h1 className="title">
          <span className="live">LIVE</span> <span className="events">EVENTS</span>
        </h1>
        <div>
          {visibleGames < gameData.games.length && (
            <button
              className='btn btn-dark-purple'
              onClick={() => loadMore()}
            >
              View More
            </button>
          )}
          {visibleGames > 3 && (
            <button
              className='btn btn-dark-purple ml-2'
              onClick={() => loadLess()}
            >
              View Less
            </button>
          )}
        </div>
      </div>

      <div className='row'>
        {visibleGamesSlice.map(item => (
          <div key={item.id} className='card-view col-md-6 col-lg-4 mb-4'>
            <div className='card p-0 overflow-hidden h-100 shadow'>
              <img src={item.img} alt={`Game ${item.id}`} className='card-img-top' />
              <div className='card-body'>
                <h5 className='card-title'>{item.title}</h5>
                <p className='desc-text'>{item.desc}</p>
                <div className='button-container'>
                  <a href={item.link} className='action-button action-button-play' target='_blank' rel='noopener noreferrer'>
                    Battle
                  </a>
                  <button className='action-button action-button-info'>Watch Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LiveEvents;

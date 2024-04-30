import React, { useState } from 'react';
import gameData from './GameData';
import './gameTest.css';
import joinimg from '../assets/img/Join.webp';

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
    <section className='py-3 container'>
      <div className='d-flex justify-content-between align-items-center view-more-container'>
        <h1 className="title">
          Popular Events
        </h1>
        <div>
          {visibleGames < gameData.games.length && (
            <button
              className='btn btn-dark-purple'
              onClick={() => loadMore()}
            >
              VIEW ALL
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
          <div key={item.id} className='card-view col-md-6 col-lg-3 mb-4'>
            <div className='card p-0 overflow-hidden shadow'>
              <img src={item.img} alt={`Game ${item.id}`} className='card-img-top' />
            </div>
            <div className='join'>
              <a href="">
              <img src={joinimg} alt="" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LiveEvents;

import React from 'react'
import './roster.css'

export const Roster = () => {
  return (
    <div className='roster'>
      <h4><span className='our-1'>OUR</span> <span className='rost'>ROSTER</span></h4>
      <div className='placeholder'>
      <input
        type="text"
        id="username1"
        name="username1"
        placeholder="Enter your username"
      />

      <br />

      <input
        type="text"
        id="username2"
        name="username2"
        placeholder="Enter your username"
        style={{ marginLeft: '200px', height: '150px' }}
      />

      <br />

      <input
        type="text"
        id="username2"
        name="username2"
        placeholder="Enter your username"
        style={{ marginLeft: '200px', height: '150px' }}
      />

      <br />

      <input
        type="text"
        id="username2"
        name="username2"
        placeholder="Enter your username"
        style={{ marginLeft: '200px', height: '150px' }}
      />

      

    </div>

    <div className='blank'>

      </div>
    </div>
  )
}

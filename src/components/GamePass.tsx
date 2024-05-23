import React from 'react'
import './Gamepass.css'
import {PassCard} from '../components/cards/PassCard.tsx'
// import FlippableCard from '../components/cards/flippable-card.js'

export const GamePass = () => {
  return (
    <div id='game-pass'>
    <h3 className='h3c'>GamePass</h3>
    <div className='gamepass'>
    
    <PassCard img-1="/assets/NFT-Card_01000.png"/>
    {/* <FlippableCard/> */}
  </div>
  </div>
  )
}

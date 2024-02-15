import React from 'react'
import './Gamepass.css'
import {PassCard} from '../components/cards/PassCard.tsx'
// import FlippableCard from '../components/cards/flippable-card.js'

export const GamePass = () => {
  return (
    <div>
    <h3 className='h3c'><span className='game'>GAME</span> <span className='pass'>PASS</span> </h3>
    <div className='gamepass'>
    
    <PassCard img-1="/assets/NFT-Card_01000.png"/>
    {/* <FlippableCard/> */}
  </div>
  </div>
  )
}

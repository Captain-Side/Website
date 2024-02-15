import React from 'react'
import './Gamepass.css'
import {PassCard} from '../components/cards/PassCard.tsx'
// import FlippableCard from '../components/cards/flippable-card.js'

export const GamePass = () => {
  return (
    <div className='gamepass'>
    <h3><span className='game'>GAME</span> <span className='pass'>PASS</span> </h3>
    <PassCard img-1="/assets/NFT-Card_01000.png"/>
    {/* <FlippableCard/> */}
  </div>
  )
}

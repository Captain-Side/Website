import React from 'react'
import './Gamepass.css'
import {PassCard} from '../components/cards/PassCard.tsx'
export const GamePass = () => {
  return (
    <div className='gamepass'>
    <h3><span className='game'>GAME</span> <span className='pass'>PASS</span> <span className='view'><u>VIEW MORE</u></span></h3>
    <PassCard imgSrc="/assets/NFT-Card_01000.png"/>
  </div>
  )
}

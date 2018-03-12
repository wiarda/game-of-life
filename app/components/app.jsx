import React from 'react'
import {Header} from './Header.jsx'
import GameBoard from '../containers/GameBoard.jsx'
// import GameBoard from './gameboard'


export default function App(props){
  return (
    <div>
      <Header />
      <GameBoard />
    </div>
  )
}

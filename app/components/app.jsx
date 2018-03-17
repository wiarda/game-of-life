import React from 'react'
import {Header} from './Header.jsx'
import GameBoard from '../containers/GameBoard.jsx'
import GenerateSettings from '../containers/GenerateSettings.jsx'

export default function App(props){
  return (
    <div>
      <Header />
      <GenerateSettings />
      <GameBoard />
    </div>
  )
}

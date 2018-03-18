import React from 'react'
import {Header} from './Header.jsx'
import GameBoard from '../containers/GameBoard.jsx'
import GenerateSettings from '../containers/GenerateSettings.jsx'
import PropagateCells from '../containers/PropagateCells.jsx'

export default function App(props){
  return (
    <div>
      <Header />
      <GenerateSettings />
      <GameBoard />
      <PropagateCells/>
    </div>
  )
}

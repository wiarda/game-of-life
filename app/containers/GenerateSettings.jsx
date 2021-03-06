import React from 'react'
import { connect } from 'react-redux'
import GenerateBoardLayout from '../components/GenerateBoardLayout.jsx'
import { setLayout, updateCells, makeSet} from '../actions/actions.jsx'

const mapStatetoProps = state => {
  return{
    xCells: state.boardsize.xCells
    ,yCells: state.boardsize.yCells
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    setLayout: (generationObject,cellArray,cssRuleName) => {dispatch(setLayout(generationObject,cellArray,cssRuleName))}
    ,updateCells: (newState) => {dispatch(updateCells(newState))}
    ,resetCellsOfInterest: () => {dispatch(makeSet([]))}
  }
}


const GenerateSettings = connect(mapStatetoProps, mapDispatchToProps)(GenerateBoardLayout)
export default GenerateSettings

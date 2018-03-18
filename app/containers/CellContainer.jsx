import react from 'react'
import {connect} from 'react-redux'
import Cell from '../components/Cell.jsx'

const mapStateToProps = (state,ownProps) =>{
  // console.log("mapping state of cellcontainer")
  // console.log(ownProps)
  return{
    cellState: state.cells[ownProps.cellId]
  }
}

const CellContainer = connect(mapStateToProps)(Cell)

export default CellContainer

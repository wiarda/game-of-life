import React from 'react'

export default class Cell extends React.PureComponent{
  constructor(props){
    super(props)
  }

  // shouldComponentUpdate(nextProps){
  //   // console.log("checking " + this.props.cellId + " " + nextProps.cellState[this.props.cellId])
  //   if (this.props.cellState != nextProps.cellState){
  //     // console.log("update required for " + this.props.cellId)
  //     return true
  //   }
  //   else {return false}
  // }

  render(){
    console.log("internal cell render")
    // console.log(this.props.cellState)
    return(
      <span
        id={this.props.cellId}
        onClick={this.props.cellClick}
        className={`life-cell ${this.props.cssRuleName} cell-${this.props.cellState}`}
      />
    )
  }
}

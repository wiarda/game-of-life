import React from 'react'

class Cell extends React.Component{
  constructor(props){
    super(props)
    this.clickHandler = this.clickHandler.bind(this)
  }

  shouldComponentUpdate(nextProps){
    if (this.props.cellState != nextProps.cellState ||
      this.props.cssRuleName != nextProps.cssRuleName){
      return true
    }
    else {return false}
  }

  clickHandler(e){
    this.props.cellClick(e)
    this.props.addToSet(e.target.id)
  }

  render(){
    console.log("internal cell render")
    return(
      <span
        id={this.props.cellId}
        onClick={this.clickHandler}
        className={`life-cell ${this.props.cssRuleName}`}
      />
    )
  }
}

export default function Cells(props){
    let boardElements = props.cellArray.map(function(key){
      console.log("board render")
        return (
            <Cell
              key={key}
              cellId = {key}
              cellClick = {props.cellClick}
              addToSet = {props.addToSet}
              // cellState = {props.cellState[key]}
              cssRuleName = {props.cssRuleName}
            />
          )
        })

    return(
      <div className="container-fluid gameboard-container">
        <div className="row">

          <div className="col-0 col-sm-1 col-lg-2"/>

          <div className="col-12 col-sm-10 col-lg-8">
            <div className="row">
              {boardElements}
            </div>
          </div>

          <div className="col-0 col-sm-1 col-lg-2"/>

        </div>
      </div>
    )
}

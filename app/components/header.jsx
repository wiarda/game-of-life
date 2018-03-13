import React from 'react'
import Controls from '../containers/Controls.jsx'

export function Header(props){
  return(
     <React.Fragment>
       <h1
         className="text-center pt-2"
       >
         Conway's Game of Life
       </h1>
       <Controls/>
     </React.Fragment>
    )
  }

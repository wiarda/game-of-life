import React from 'react'
import ControlPanel from './Controls.jsx'

export function Header(props){
  return(
     <React.Fragment>
       <h1
         className="text-center pt-2"
       >
         Game of Life
       </h1>
       <ControlPanel
         speed="1"
       />
     </React.Fragment>
    )
  }

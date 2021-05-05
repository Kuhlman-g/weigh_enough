import React, { useEffect, useState } from 'react'
import RowerMainContainer from '../rower_components/RowerMainContainer'
import ShellContainer from './ShellContainer'

const BoatMainContainer = (props)=> {
  
  return(
    <div>
      <div>
        <ShellContainer />
      </div>
      <div className="boats-main-container">
        <RowerMainContainer />
      </div>
    </div>
  )
}

export default BoatMainContainer
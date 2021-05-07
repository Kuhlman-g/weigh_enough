import React from "react"
import pair from "../../../../assets/images/pair.png"
import eightrowers from "../../../../assets/images/eightrowers.png"
import fourrowers from "../../../../assets/images/fourrowers.png"

const LineupContainer = (props) =>{
  let shellSeats
  if(props.shell != undefined){
    shellSeats = props.shell.seats
  }else{
    shellSeats = null
  }
  // app/javascript/react/components/lineup_components/LineupContainer.js
  if (shellSeats == 8){
  return(
    <div className="callout lineup-container">
      <img src={eightrowers} alt="this is a boat"/>
    </div>
  )
  }else if(shellSeats == 4){
    return(
    <div className="callout lineup-container">
      <img src={fourrowers} alt="this is a 4"/>
    </div>
    )
  }else if(shellSeats == 2){
    return(
    <div className="callout lineup-container">
      <img src={pair} alt="this is a pair"/>
  </div>
    )
  }else{
    return(
    <div className="callout lineup-container">
      <p>
        Select A boat
      </p>
    </div>
    )
  }
}

export default LineupContainer
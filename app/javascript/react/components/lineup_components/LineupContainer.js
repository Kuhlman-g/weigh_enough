import React from "react"
import pair from "../../../../assets/images/pair.png"
import eightrowers from "../../../../assets/images/eightrowers.png"
import fourrowers from "../../../../assets/images/fourrowers.png"
import single from "../../../../assets/images/single.png"

const LineupContainer = (props) =>{
  

  let shellSeats
  if(props.shell != undefined){
    shellSeats = props.shell.seats
  }else{
    shellSeats = null
  }
  if (shellSeats == 8){
  return(
    <div className="callout lineup-container">
      <img src={single}/>
      <img src={single}/>
      <img src={single}/>
      <img src={single}/>
      <img src={single}/>
      <img src={single}/>
      <img src={single}/>
      <img src={single}/>
    </div>
  )
  }else if(shellSeats == 4){
    return(
    <div className="callout lineup-container">
      <img src={single}/>
      <img src={single}/>
      <img src={single}/>
      <img src={single}/>
    </div>
    )
  }else if(shellSeats == 2){
    return(
    <div className="callout lineup-container">
      <img src={single}/>
      <img src={single}/>
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
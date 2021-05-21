import React, { useState } from "react"
import single from "../../../../assets/images/single.png"
import LineupCell from './LineupCell.js'

const LineupContainer = (props) =>{

  const rowerArray = props.lineUp.map(rower =>{
    if(rower.first_name != null){
    return(
    <LineupCell rowerFirst ={rower.first_name} rowerLast={rower.last_name} seatId={rower.seatId} />
    )
  }
  })

  const formSubmit = (event) =>{
    event.preventDefault()
    props.addNewLineup()
  }

  let shellSeats
  if(props.shell != undefined){
    shellSeats = props.shell.seats
  }else{
    shellSeats = null
  }

  if (shellSeats == 8){
    return(
      <>
      <div>
        <table className="responsive-card-table shell-table">
        <thead>
          <tr>
            <th>Rower</th>
            <th>Seat</th>
          </tr>
        </thead>
        <tbody>
          {rowerArray}
        </tbody>
      </table>
      </div>     
      <h6>
          {props.shell.name}
      </h6> 
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
      <div>
        <input type='button' onClick={formSubmit} value="Create Lineup" className="btn" />
      </div>
      </>
      )
  }else if(shellSeats == 4){
    return(
    <>
    <div>
      <table className="responsive-card-table shell-table">
      <thead>
        <tr>
          <th>Rower</th>
          <th>Seat</th>
        </tr>
      </thead>
      <tbody>
        {rowerArray}
      </tbody>
    </table>
    </div>
    <h6>
      {props.shell.name}
    </h6>       
    <div className="callout lineup-container">
      <img src={single}/>
      <img src={single}/>
      <img src={single}/>
      <img src={single}/>
    </div>
    <div>
      <input type='button' onSubmit={formSubmit} value="Create Lineup" className="btn" />
    </div>
    </>
    )
  }else if(shellSeats == 2){
    return(
      <>
      <div>
        <table className="shell-table">
        <thead>
          <tr>
            <th>Rower</th>
            <th>Seat</th>
          </tr>
        </thead>
        <tbody>
          {rowerArray}
        </tbody>
      </table>
      </div>      
      <div className="lineup-container">
        <img src={single}/>
        <img src={single}/>
      </div>
      <div>
        <input type='button' onSubmit={formSubmit} value="Create Lineup" className="btn" />
      </div>
      </>
    )
  }else{
    return(
    <>
      <div className="callout lineup-container">
        <p>
          Select A boat
        </p>
      </div>
      <div>
        <input type='button' onSubmit={formSubmit} value="Create Lineup" className="btn" />
      </div>
    </>
    )
  }
}

export default LineupContainer
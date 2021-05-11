import React from "react"

const LineupCell = (props) => {
  
  return(
    <tr className="roster-text">
      <td data-label="Rower"> {props.rowerFirst} {props.rowerLast}</td>
      <td data-label="Seat">{props.seatId}</td>
    </tr>
  )
}

export default LineupCell
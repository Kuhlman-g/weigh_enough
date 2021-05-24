import React from 'react'

const LineupRosterCell = props =>{
  
  return(
    <tr onClick={props.handleLineupClick}>
      <td data-label="Lineup Name">{props.name}</td>
      <td data-label="Seats">{props.seats}</td>
    </tr>
  )
}

export default LineupRosterCell
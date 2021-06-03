import React from 'react'
import { Link } from 'react-router-dom'

const LineupRosterCell = props =>{
  
  return(
    <tr>
      <td data-label="Lineup Name">
        <Link to={`boat-roster/${props.id}`}>{props.name}</Link>
      </td>
    </tr>
  )
}

export default LineupRosterCell
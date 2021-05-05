import React from 'react'

const ShellCell = (props) => {

  return(
    <tr className="roster-text">
      <td data-label="Shell Name">{props.name}</td>
      <td data-label="Seats">{props.seats}</td>
    </tr>
  ) 
}

export default ShellCell
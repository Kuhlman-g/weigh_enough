import React from 'react'

const RowerCell = (props) => {
  debugger
  return(
    <tr className="roster-text">
      <td data-label="Last Name">{props.last_name}</td>
      <td data-label="First Name">{props.first_name}</td>
    </tr>
  ) 
}

export default RowerCell
import React from 'react'

const RowerCell = (props) => {

  return(
    <tr onClick={props.handleClick} className="roster-text">
      <td data-label="Last Name">{props.last_name}</td>
      <td data-label="First Name">{props.first_name}</td>
    </tr>
  ) 
}

export default RowerCell
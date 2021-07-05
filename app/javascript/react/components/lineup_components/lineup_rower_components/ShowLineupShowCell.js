import React from 'react'

const ShowLineupShowCell = props => {
  return(
    <div onClick={props.handleClick}>
      {props.first_name} {props.last_name}
    </div>
  )
}

export default ShowLineupShowCell
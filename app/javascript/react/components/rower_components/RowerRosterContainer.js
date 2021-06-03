import React from 'react'
import RowerCell from './RowerCell'

const RowerRosterContainer = (props) => {

  const rowersArray = props.rowersList.map(rower => {
    let handleClick = () => {props.handleSelected(rower.id)}

    return(
    <RowerCell first_name={rower.first_name} id={rower.id} last_name={rower.last_name} handleClick={handleClick} />
    )
  })

  return(
    <div className="roster-table">
      <table className="responsive-card-table roster-table hover">
        <thead>
          <tr>
            <th>Last Name</th>
            <th>First Name</th>
          </tr>
        </thead>
        <tbody>
          {rowersArray}
        </tbody>
      </table>
      <a href="rowers/new" className="button">Add Rowers To Roster</a>
    </div>
  )
}

export default RowerRosterContainer


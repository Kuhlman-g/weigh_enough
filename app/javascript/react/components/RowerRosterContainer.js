import React, { useState, useEffect } from 'react'
import RowerCell from './RowerCell'

const RowerRosterContainer = (props) => {

  const rowersArray = props.rowersList.map(rower => {

    return(
    <RowerCell first_name={rower.first_name} id={rower.id} last_name={rower.last_name} />
    )
  })

  return(
    <div className="grid-container">
      <table className="responsive-card-table unstriped roster-table">
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
    </div>
  )
}
export default RowerRosterContainer


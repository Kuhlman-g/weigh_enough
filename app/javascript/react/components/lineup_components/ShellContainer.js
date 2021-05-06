import React from 'react'
import ShellCell from './ShellCell.js'

const ShellContainer = props => {

  const shellArray = props.shells.map(shell => {
  return(
    <ShellCell name={shell.name} seats={shell.seats} />
  )})

  return(
    <div className="grid-container">
    <table className="responsive-card-table unstriped roster-table">
      <thead>
        <tr>
          <th>Shell Name</th>
          <th>Seats</th>
        </tr>
      </thead>
      <tbody>
        {shellArray}
      </tbody>
    </table>
  </div>
  )
}

export default ShellContainer
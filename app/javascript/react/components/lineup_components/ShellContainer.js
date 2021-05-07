import React from 'react'
import ShellCell from './ShellCell.js'

const ShellContainer = props => {

  const shellArray = props.shells.map(shell => {
    let handleClick = () => {props.handleSelectedShell(shell.id)}
  return(
    <ShellCell name={shell.name} seats={shell.seats} handleClick={handleClick} />
  )})

  return(
    <div className="grid-container lineup-container">
    <table className="responsive-card-table shell-table">
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
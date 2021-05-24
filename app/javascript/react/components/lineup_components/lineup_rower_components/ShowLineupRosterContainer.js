import React from 'react'
import LineupRosterCell from './LineupRosterCell'

const ShowLineupRosterContainer = props => {

  const lineupArray = props.lineups.map(lineup =>{
    let lineupClick = () => { props.handleLineupClick(lineup.id)}
    return(
      <LineupRosterCell name={lineup.name} key={lineup.id} id={lineup.id} handleLineupClick={lineupClick}/>
    )
  })

  return(
    <div>
      <table className="responsive-card-table shell-table">
        <thead>
          <tr>
            <th>Rower</th>
            <th>Seat</th>
          </tr>
        </thead>
        <tbody>
          {lineupArray}
        </tbody>
      </table>
    </div> 
  )
}

export default ShowLineupRosterContainer


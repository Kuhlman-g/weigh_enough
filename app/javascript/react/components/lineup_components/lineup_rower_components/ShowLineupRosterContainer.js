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
    <>
    <div className="cell small-4"></div>
      <div className="callout secondary large-auto">
        <table className="responsive-card-table hover">
          <thead>
            <tr>
              <th className="text-align">Lineup</th>
            </tr>
          </thead>
          <tbody>
            {lineupArray}
          </tbody>
        </table>
      </div> 
      <div className="cell small-4"></div>
    </>
  )
}

export default ShowLineupRosterContainer


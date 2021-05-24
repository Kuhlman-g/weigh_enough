import React, { useState, useEffect } from 'react'
import ShowLineupRosterContainer from './ShowLineupRosterContainer'
import ShowLineupShowCell from './ShowLineupShowCell'

const ShowLineupShowContainer = (props) => {

  const [lineup, setLineup] = useState({
    id: null,
    name: '',
    rowers: []
  })
  const lineupId = props.match.params.id

  const getLineups = async () => {
    try {
      const response = await fetch(`/api/v1/lineups/${lineupId}`)
      if (!response){
        const errorMessage = `${response.status} (${response.statusTest})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const parsedLineups = await response.json()
      setLineup(parsedLineups)
    } catch(err){
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  const lineupArray = lineup.rowers.map(rower => {

    return(
      <ShowLineupShowCell first_name={rower.first_name} last_name={rower.last_name} side={rower.side}/>
    )
  })

  useEffect( ()=>{
    getLineups()
  }, [])

  return(
    <div>
      <p>{lineupArray}</p>
    </div>
  )

}

export default ShowLineupShowContainer
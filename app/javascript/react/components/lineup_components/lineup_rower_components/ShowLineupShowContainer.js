import React, { useState, useEffect } from 'react'
import ShowLineupRosterContainer from './ShowLineupRosterContainer'

const ShowLineupShowContainer = (props) => {

  const [lineup, setLineup] = useState({
    id: null,
    name: '',
    rowers: []
  })

  const lineupId = props.id

  const getLineups = async () => {
    debugger
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

  useEffect( ()=>{
    getLineups()
  }, [])

  return(
    <div>
    </div>
  )

}

export default ShowLineupShowContainer
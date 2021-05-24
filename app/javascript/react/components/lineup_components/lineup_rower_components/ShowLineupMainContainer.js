import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import FetchLineups from '../../fetches/FetchLineups'
import ShowLineupRosterContainer from './ShowLineupRosterContainer'
import ShowLineupShowContainer from './ShowLineupShowContainer'

const ShowLineupMainContainer = props => {
  const [lineup, setLineups] = useState([])
  const [selectedLineup, setSelectedLineup] = useState([])

  useEffect(() => {
    FetchLineups().then((parsedLineups) => {
      setLineups(parsedLineups)
    })
  }, [])

  const handleLineupClick = (id) => {
    if(id === selectedLineup) {
      setSelectedLineup(null)
    }else{
      setSelectedLineup(id)
    }
  }

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
      <div onClick={getLineups()}>
        <ShowLineupRosterContainer lineups={lineup} handleLineupClick={handleLineupClick} />
      </div>
      <div>
        <ShowLineupShowContainer id={selectedLineup} />
      </div>
    </div>
    )
}

export default ShowLineupMainContainer
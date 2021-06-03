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


  return(
      <div className="grid-x margin-x lineup-padding">
        <ShowLineupRosterContainer lineups={lineup} handleLineupClick={handleLineupClick} />
      </div>
    )
}

export default ShowLineupMainContainer
import React, { useState, useEffect } from 'react'
import ShowLineupRosterContainer from './ShowLineupRosterContainer'
import ShowLineupShowCell from './ShowLineupShowCell'
import RowerShowContainer from '../../rower_components/RowerShowContainer'

const ShowLineupShowContainer = (props) => {

  const [lineup, setLineup] = useState({
    id: null,
    name: '',
    rowers: []
  })

  const [selectedRower, setSelectedRower] = useState([])

  const toggleSelectedRower = (id) => {
    debugger
    if(id === selectedRower) {
      setSelectedRower(null)
    }else{
      setSelectedRower(id)
    }
  }

  const showRower = lineup.rowers.map(rower=> {
    debugger
    if(rower.id === selectedRower){
        return(
          <RowerShowContainer shownRower={rower}/>
        )}
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
    let handleClick = () => {toggleSelectedRower(rower.id)}
    return(
      <ShowLineupShowCell first_name={rower.first_name} last_name={rower.last_name} side={rower.side} id={rower.id} handleClick={handleClick}/>
    )
  })

  useEffect( ()=>{
    getLineups()
  }, [])

  debugger
  return(
    <div className="grid-x margin-x lineup-padding">
      <div className="cell small-2"></div>
        <div className="callout secondary large-auto">
        {lineupArray}
        </div>
      <div className="cell small-2">
        <div className="callout secondary large-auto">
          {showRower}
        </div>
      </div>
    </div>
  )

}

export default ShowLineupShowContainer
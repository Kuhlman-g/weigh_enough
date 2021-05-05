import React, { useEffect, useState } from 'react'
import RowerRosterContainer from './RowerRosterContainer'
import RowerShowContainer from './RowerShowContainer'

const RowerMainContainer = (props) => {
  const [rowers, setRowers] = useState([])
  const [selectedRower, setSelectedRower] = useState([])

  const toggleSelectedRower = (id) => {
    if(id === selectedRower) {
      setSelectedRower(null)
    }else{
      setSelectedRower(id)
    }
  }

  const fetchRowers = async () => {
    try{
      const response = await fetch("/api/v1/rowers")
      if (!response){
        const errorMessage = `${response.status} (${response.statusTest})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const parsedRowers = await response.json()
      setRowers(parsedRowers)
    } catch(err){
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    fetchRowers()
  }, [])

  const showRower = rowers.map(rower=> {
    if(rower.id === selectedRower){
        return(
          <RowerShowContainer shownRower={rower}/>
        )}
      })

  return(
      <div className="rower-main-container">
        <div className="middle-content-section">
          <RowerRosterContainer rowersList={rowers} handleSelected={toggleSelectedRower} />
        </div>
        <div className="middle-content-section">
          {showRower}
        </div>
      </div>
  )
  }

export default RowerMainContainer

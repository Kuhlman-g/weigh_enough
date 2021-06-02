import React, { useEffect, useState } from 'react'
import RowerRosterContainer from './RowerRosterContainer'
import RowerShowContainer from './RowerShowContainer'
import fetchRowers from '../fetches/FetchRowers'

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

  useEffect(() => {
    fetchRowers().then((parsedRowers) => {
      setRowers(parsedRowers)
    }) 
  },[])

  const showRower = rowers.map(rower=> {
    if(rower.id === selectedRower){
        return(
          <RowerShowContainer shownRower={rower}/>
        )}
    })

    debugger
  return(
      <div className="">
        <div className="roster-show-table">
          {showRower}
        </div>
        <div className="">
          <RowerRosterContainer rowersList={rowers} handleSelected={toggleSelectedRower} />
        </div>
      </div>
  )
  }

export default RowerMainContainer

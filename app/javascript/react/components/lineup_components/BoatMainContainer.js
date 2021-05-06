import React, { useEffect, useState } from 'react'
import ShellContainer from './ShellContainer.js'
import fetchShells from '../fetches/FetchShells'
import RowerRosterContainer from '../rower_components/RowerRosterContainer'
import fetchRowers from '../fetches/FetchRowers'
import RowerShowContainer from '../rower_components/RowerShowContainer'
import LineupContainer from './LineupContainer.js'

const BoatMainContainer = (props)=> {
  const [selectedShell, setSelectedShell] = useState([])
  const [shells, setShells] = useState([])
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
    fetchShells().then((parsedShells) => {
      setShells(parsedShells)
    })
  }, [])

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


  return(
    <div>
      <div className="boats-main-container">
        <ShellContainer shells={shells}/>
      </div>
      <div className="lineup-container">
        <LineupContainer/>
      </div>
      <div className="boats-main-container">
        <div className="">
          <RowerRosterContainer rowersList={rowers} handleSelected={toggleSelectedRower} />
        </div>
        <div>
          {showRower}
        </div>
      </div>
    </div>
  )
}

export default BoatMainContainer
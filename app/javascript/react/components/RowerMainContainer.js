import React, { useEffect, useState } from 'react'
import RowerRosterContainer from './RowerRosterContainer'
const RowerMainContainer = (props) => {
  const [rowers, setRowers] = useState([])

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

  return(
    <div>
      <RowerRosterContainer rowersList={rowers}/>
    </div>
  )
  }

export default RowerMainContainer

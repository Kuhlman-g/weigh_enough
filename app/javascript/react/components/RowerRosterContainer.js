import React, { useState,useEffect } from 'react'

const RowerRosterContainer = (props) => {
  const [rowers, setRowers] = useState([])

  const fetchRowers = async () => {
    try{
      const response = await fetch("/api/v1/brands")
      if (!response){
        const errorMessage = `${response.status} (${response.statusTest})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const parsedRowers = await response.json()
    } catch(err){
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    fetchRowers()
  }, [])

  return(
    <div>
      List of Rowers
    </div>
  )
}
export default RowerRosterContainer
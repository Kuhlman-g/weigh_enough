import React, { useState,useEffect } from 'react'

const RowerRosterContainer = (props) => {
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
  
  const rowerArray = rowers.map((rower => {
    return(
      <tr className="roster-text">
        <td data-label="Last Name">{rower.last_name}</td>
        <td data-label="First Name">{rower.first_name}</td>
      </tr>
    )
  }))

  return(
    <div className="grid-container">
      <table className="responsive-card-table unstriped roster-table">
        <thead>
          <tr>
            <th>Last Name</th>
            <th>First Name</th>
          </tr>
        </thead>
        <tbody>
          {rowerArray}
        </tbody>
      </table>
    </div>
  )
}
export default RowerRosterContainer
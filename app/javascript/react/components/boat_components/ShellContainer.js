import React, { useEffect, useState } from 'react'
import ShellCell from './ShellCell'

const ShellContainer = (props) => {
  const [boats, setBoats] = useState([])
  
  const fetchBoats = async () => {
    try{
      const response = await fetch("/api/v1/boats")
      if (!response){
        const errorMessage = `${response.status} (${response.statusTest})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const parsedBoats = await response.json()
      setBoats(parsedBoats)
    } catch(err){
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    fetchBoats()
  }, [])

  const shellArray = boats.map(boat => {
    
    return(
      <ShellCell name={boat.name} seats={boat.seats} />
    )
  })





  return(
    <div className="boats-main-container">
        <div className="grid-container">
          <table className="responsive-card-table unstriped roster-table">
            <thead>
              <tr>
                <th>Shell Name</th>
                <th>Seats</th>
              </tr>
            </thead>
            <tbody>
              {shellArray}
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default ShellContainer
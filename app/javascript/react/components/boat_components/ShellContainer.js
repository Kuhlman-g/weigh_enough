import React, { useEffect, useState } from 'react'

const ShellContainer = (props) => {

  const fetchBoats = async () => {
    try{
      const response = await fetch("/api/v1/boats")
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
    fetchBoats()
  }, [])

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
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default ShellContainer
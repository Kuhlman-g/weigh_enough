import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
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
  const [lineUp, setLineup] = useState([])
  const [newRower, setNewRower] = useState({
    seatId: ''
  })
  const [shouldRedirect, setShouldRedirect] = useState(false)
  

  const toggleSelectedRower = (id) => {
    if(id === selectedRower) {
      setSelectedRower(null)
    }else{
      setSelectedRower(id)
    }
  }

  const toggleSelectedShell = (id) => {
      setSelectedShell(id)
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


  const handleChange = (event) => {
    event.preventDefault()
    setNewRower({
      ...newRower,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }
  const addRowerToLineup = (event) => {
    event.preventDefault()
    
    rowers.forEach(matchRower =>{
      if(matchRower.id === selectedRower){
        const rowerSeat = {
          ...matchRower,
          seatId: newRower.seatId
        }
        setLineup([
          ...lineUp,
          rowerSeat,
        ])
      }})
  }

  const showRower = rowers.map(rower=> {
    if(rower.id === selectedRower){
        return(
          <RowerShowContainer shownRower={rower}/>
        )}
      })

  let showShell
  if(shells != null){
   shells.forEach(shell =>{
    if(parseInt(shell.id) == parseInt(selectedShell)){
    showShell = shell
    }
  })}

  const addNewLineup = async () => {
     try {
       const response = await fetch(`/api/v1/lineups/`, {
         credentials: "same-origin",
         method: "POST",
         headers: {
           "Accept": "application/json",
           "Content-Type": "application/json"
         },
         body: JSON.stringify({lineUp: lineUp, shell: selectedShell}),
       })
       if (!response.ok) {
         const errorMessage = `${response.status} (${response.statusTest})`
         const error = new Error(errorMessage)
         throw(error)
       }
       setShouldRedirect(true)
     } catch (error) {
       console.error(error)
     }
   }

  if (shouldRedirect){
    return <Redirect push to='/boat-roster' />
  }

  return(
    <div className="grid-x margin-x">
      <div className="callout secondary small-4">
        <ShellContainer shells={shells} handleSelectedShell={toggleSelectedShell}/>
        <RowerRosterContainer rowersList={rowers} handleSelected={toggleSelectedRower} />
      </div>
      <div className="callout secondary small-8">
        <LineupContainer shell={showShell} lineUp ={lineUp} addNewLineup={addNewLineup} />
        <div className="grid-x margin-x"> 
        <div className='callout secondary small-4'>
          <form onSubmit={addRowerToLineup}>
            <label htmlFor="seatId">Enter Seat Number:
              <input 
                id= 'seatId'
                name= 'seatId'
                type= 'number'
                max= '8'
                min= '1'
                value = {newRower.seatId}
                onChange = {handleChange}
              />
            </label>
            <input type='submit' value='Add Rower To Seat' className="button" />
          </form>
        </div>
        <div className='callout secondary small-4'>
          {showRower}
        </div>
        </div>
      </div>
    </div>
  );
}

export default BoatMainContainer
import React, { useEffect,useState } from 'react'
import WeatherTile from './WeatherTile'

const WeatherContainer = (props) => {
  const [weather, setWeather] = useState([])

  const getWeather= async () => {
    try {
      const response = await fetch(`/api/v1/weather`)
      if (!response){
        const errorMessage = `${response.status} (${response.statusTest})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const parsedWeather = await response.json()
      setWeather(parsedWeather)
    } catch(err){
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  useEffect( ()=>{
    getWeather()
  }, [])

  return(
    <div>
      <WeatherTile weather={weather}/>
    </div>
  )
}

export default WeatherContainer
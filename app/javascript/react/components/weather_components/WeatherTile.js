import React from 'react'

const WeatherTile = props => {

  if(props.weather.weather){
  return (
    <div>
      <ul className="stats-list">
        <li>
          {props.weather.name} <span className="stats-list-label">City</span>
        </li>
        <li className="stats-list-positive">
          {props.weather.weather[0].main} <span className="stats-list-label"> Weather </span>
        </li>
        <li className="stats-list-positive">
          {props.weather.main.temp} <span className="stats-list-label">Temp</span>
        </li>
        <li className="stats-list-positive">
          {props.weather.wind.speed} Knots <span className="stats-list-label">Wind Speed</span>
        </li>
      </ul>
    </div>
  )}else{
    return(
    <div>
    </div>
    )}
}
export default WeatherTile
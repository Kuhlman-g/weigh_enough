import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import RowerMainContainer from './rower_components/RowerMainContainer'
import BoatMainContainer from './boat_components/BoatMainContainer'

export const App = (props) => {
  return (    
  <BrowserRouter>
    <Switch>
      <Route exact path="/rowers" component={ RowerMainContainer }/>
      <Route exact path="/boats" component={ BoatMainContainer } />
    </Switch>
  </BrowserRouter>
  )
}



export default App

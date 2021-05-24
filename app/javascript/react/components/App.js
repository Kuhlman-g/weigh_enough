import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import RowerMainContainer from './rower_components/RowerMainContainer'
import BoatMainContainer from './lineup_components/BoatMainContainer'
import ShowLineupMainContainer from './lineup_components/lineup_rower_components/ShowLineupMainContainer'
import ShowLineupShowContainer from './lineup_components/lineup_rower_components/ShowLineupShowContainer'

export const App = (props) => {
  return (    
  <BrowserRouter>
    <Switch>
      <Route exact path="/rowers" component={ RowerMainContainer }/>
      <Route exact path="/boats" component={ BoatMainContainer } />
      <Route exact path="/boat-roster" component={ ShowLineupMainContainer} />
      <Route exact path="/boat-roster/:id" component= { ShowLineupShowContainer} />
    </Switch>
  </BrowserRouter>
  )
}



export default App

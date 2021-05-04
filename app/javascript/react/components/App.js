import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import RowerMainContainer from './RowerMainContainer'

export const App = (props) => {
  return (    
  <BrowserRouter>
    <Switch>
      <Route exact path="/rowers" component={ RowerMainContainer }/>
    </Switch>
  </BrowserRouter>)
}



export default App

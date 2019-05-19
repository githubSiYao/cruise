import React from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import DashboardContainer from './container/DashboardContainer'
import AgentContainer from './container/AgentContainer'
import MyCruiseContainer from './container/MyCruiseContainer'
import HelpConatainer from './container/HelpContainer'
import './scss/reset.scss'

class App extends React.Component {
  render() {
    return (
      < HashRouter >
        <Switch>
          <Route component={AgentContainer} path="/agent"></Route>
          <Route component={DashboardContainer} path="/index"></Route>
          <Route component={HelpConatainer} path="/help"></Route>
          <Route component={MyCruiseContainer} path="/myCruise"></Route>
          <Redirect from="/" to="/index"></Redirect>
        </Switch>
      </HashRouter >
    )
  }
}

export default App

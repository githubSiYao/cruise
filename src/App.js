import React from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import DashboardContainer from './container/DashboardContainer'
import AgentContainer from './container/AgentContainer'

class App extends React.Component {
  render() {
    return (
      < HashRouter >
        <Switch>
          <Route component={AgentContainer} path="/agent"></Route>
          <Route component={DashboardContainer} path="/index"></Route>
          {/* <Route component={Help} path="/help"></Route> */}
          {/* <Route component={MyCruise} path="/myCruise"></Route> */}
          <Redirect from="/" to="/index"></Redirect>
        </Switch>
      </HashRouter >
    )
  }
}

export default App

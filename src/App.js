import React from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import Dashboard from './page/Dashboard'

class App extends React.Component {
  render() {
    return (
      < HashRouter >
        <Switch>
          {/* <Route component={Agent} path="/agent"></Route> */}
          <Route component={Dashboard} path="/index"></Route>
          {/* <Route component={Help} path="/help"></Route> */}
          {/* <Route component={MyCruise} path="/myCruise"></Route> */}
          <Redirect from="/" to="/index"></Redirect>
        </Switch>
      </HashRouter >
    )
  }
}

export default App

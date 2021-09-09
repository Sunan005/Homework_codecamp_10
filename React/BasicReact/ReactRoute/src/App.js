import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import Router from './route/route';

export class App extends Component {
  render() {
    return (
     <Switch>
       <Router/>
     </Switch>
    )
  }
}

export default App


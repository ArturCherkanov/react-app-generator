 
import React, { Component } from 'react';

import HomePage from './Pages/Home/index';

import { Switch, Route } from 'react-router-dom';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    );
  }
}
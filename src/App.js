import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './Home';
import Authentication from './Authentication';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/"  component={ Home } exact />
        <Route path="/auth" component={ Authentication } />
      </div>
    );
  }
}

export default App;

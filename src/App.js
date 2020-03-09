import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch} from 'react-router-dom';
import Home from './containers/Home.js'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom';
import Home from './containers/Home.js'
import Projects from './containers/Projects.js'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/projects' component={Projects}/>
        <Route exact path='/' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;

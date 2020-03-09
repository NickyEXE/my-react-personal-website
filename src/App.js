import React from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom';
import Home from './containers/Home.js'
import Projects from './containers/Projects.js'
import Nav from './components/Nav.js'
import SingWithNicky from './components/projects/SingWithNicky.js'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        {/* pass through component */}
        <Route path='/projects/singwithnicky' render={() => <Projects componentToUse={SingWithNicky} />}/>
        <Route exact path='/projects' component={Projects}/>
        <Route exact path='/' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;

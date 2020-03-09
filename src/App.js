import React from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom';
import Home from './containers/Home.js'
import Projects from './containers/Projects.js'
import Nav from './components/Nav.js'
import SingWithNicky from './components/projects/SingWithNicky.js'
import CentralParkExplorer from './components/projects/CentralParkExplorer.js'
import AWS from './assets/icons/aws.png'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        {/* pass through component */}
        <Route path='/projects/singwithnicky' render={() => <Projects componentToUse={SingWithNicky} />}/>
        <Route path='/projects/centralparkexplorer' render={() => <Projects componentToUse={CentralParkExplorer} />}/>
        <Route exact path='/projects' component={Projects}/>
        <Route exact path='/' component={Home}/>
      </Switch>
      <img id="aws" src={AWS} alt="This website hosted on Amazon Web Services!"/>
    </div>
  );
}

export default App;

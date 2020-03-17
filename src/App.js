import React, {useEffect} from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom';
import Home from './containers/Home.js'
import Projects from './containers/Projects.js'
import Nav from './components/Nav.js'
import SingWithNicky from './components/projects/SingWithNicky.js'
import CentralParkExplorer from './components/projects/CentralParkExplorer.js'
import XReader from './components/projects/XReader.js'
import AWS from './assets/icons/aws.png'

function App() {


  useEffect(() => {
    fetch("http://singwithnicky.herokuapp.com/ping", {mode: 'no-cors'})
    fetch("https://lit-wildwood-84809.herokuapp.com/scores/highscore", {mode: 'no-cors'})
    fetch("https://serene-scrubland-24770.herokuapp.com/ping")
    }, [])

  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route path='/projects/singwithnicky' render={() => <Projects componentToUse={SingWithNicky} />}/>
        <Route path='/projects/centralparkexplorer' render={() => <Projects componentToUse={CentralParkExplorer} />}/>
        <Route path='/projects/xreader' render={() => <Projects componentToUse={XReader} />}/>
        <Route exact path='/projects' component={Projects}/>
        <Route exact path='/' component={Home}/>
      </Switch>
      <a href="https://en.wikipedia.org/wiki/Amazon_Web_Services"><img id="aws" src={AWS} alt="This website hosted on Amazon Web Services!"/></a>
    </div>
  );
}

export default App;

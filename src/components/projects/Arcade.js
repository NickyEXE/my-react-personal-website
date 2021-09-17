
import React from 'react';
import pongImg from "../../assets/photos/PONG.png";
import divekickImg from "../../assets/photos/divekick.png";
import pong from '../../games/pong/pong';
import divekick from '../../games/divekick/Divekick';
import PlayGame from "../games/PlayGame";
import PongReadme from "../games/readmes/PongReadme"
import DivekickReadme from "../games/readmes/DivekickReadme"
import SelectReadme from "../games/readmes/SelectReadme"
import { Route, Switch, NavLink } from 'react-router-dom';

const Arcade = () => {

  return (<div id="arcade">
    <p>This portion of the website works best in the browser.</p>
    <p>Theming inspired by the SNK Corporation and their aesthetic masterpiece: The NEO-GEO arcade cabinet.</p>
    <div className={`arcade-machine neo-geo on`}>
      <div className="arcade-header">
        <h1>NICKY-DOVER™️</h1>
        <div className="games">
          <NavLink exact to="/projects/arcade/pong" activeClassName="selected">
            <img src={pongImg} alt="Pong"/>
          </NavLink>
          <NavLink exact to="/projects/arcade/divekick" activeClassName="selected">
            <img src={divekickImg} alt="Divekick"/>
          </NavLink>
        </div>
      </div>
      <div id="arcade-main"></div>
      <div id="arcade-readme">
        <Switch>
          <Route path="/projects/arcade/pong" render={() => <><PlayGame game={pong}/><PongReadme/></>}/>
          <Route path="/projects/arcade/divekick" render={() => <><PlayGame game={divekick}/><DivekickReadme/></>}/>
          <Route exact path="/projects/arcade" render={() => <><PlayGame game={()=>{return()=>{}}}/><SelectReadme/></>}/>
        </Switch>
      </div>
    </div>
  </div>)
}

export default Arcade;

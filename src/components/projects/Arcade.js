
import React from 'react';
import pongImg from "../../assets/photos/PONG.png"
import pong from '../../games/pong/pong';
import PlayGame from "../games/PlayGame";
import GameScreen from "../games/GameScreen";
import { Route, Switch, NavLink } from 'react-router-dom';

const Arcade = () => {

  return (<div id="arcade">
    <p>This portion of the website works best in the browser.</p>
    <div className={`arcade-machine neo-geo on`}>
      <div className="arcade-header">
        <h1>NICKY-DOVER™️</h1>
        <div className="games">
          <NavLink exact to="/projects/arcade/pong" activeClassName="selected">
            <img src={pongImg} alt="Pong"/>
          </NavLink>
          <NavLink exact to="/projects/arcade/pong" activeClassName="selected">
            <img src={pongImg} alt="Pong"/>
          </NavLink>
          <NavLink exact to="/projects/arcade/pong" activeClassName="selected">
            <img src={pongImg} alt="Pong"/>
          </NavLink>
          <NavLink exact to="/projects/arcade/pong" activeClassName="selected">
            <img src={pongImg} alt="Pong"/>
          </NavLink>
        </div>
      </div>
      <div id="arcade-main"></div>
    </div>
    <Switch>
      <Route path="/projects/arcade/pong" render={() => <PlayGame game={pong}/>}/>
      <Route exact path="/projects/arcade" render={() => <PlayGame game={()=>{}}/>}/>
    </Switch>
  </div>)
}

export default Arcade;

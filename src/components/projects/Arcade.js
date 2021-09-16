import { render } from '@testing-library/react';
import { useState } from 'react';
import React from 'react';
import pongImg from "../../assets/photos/PONG.png"
import playPong from '../../games/pong/pong';
import { Route, Switch} from 'react-router-dom';

const Arcade = () => {

  const [selected, setSelected] = useState(null)

  const renderArcade = (gameCallback) => {
    setSelected("pong")
    gameCallback(document.getElementById("arcade-main"))
  }

  return (<div id="arcade">
    <p>This portion of the website works best in the browser.</p>
    <div className={`arcade-machine neo-geo ${selected && "on"}`}>

    <div className="arcade-header">
      <h1>NICKY-DOVER™️</h1>
      <div class="games">
        <img src={pongImg} onClick={() => renderArcade(playPong)}/>
        <img src={pongImg} onClick={() => renderArcade(playPong)}/>
        <img src={pongImg} onClick={() => renderArcade(playPong)}/>
        <img src={pongImg} onClick={() => renderArcade(playPong)}/>
      </div>
    </div>
    <div id="arcade-main"><canvas width="1000" height="600"></canvas></div>
    </div>
    <br/>
  </div>)
}

export default Arcade;

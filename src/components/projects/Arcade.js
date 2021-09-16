import { render } from '@testing-library/react';
import { useState } from 'react';
import React from 'react';
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
    <div class={`arcade-machine ${selected ? "on neo-geo" : ""}`}>
    <div class="arcade-header">{selected && <h1>NICKY-DOVER™️</h1>}</div>
    <div id="arcade-main"></div>
    </div>
    <br/>
    <button onClick={() => renderArcade(playPong)}>Pong</button>
  </div>)
}

export default Arcade;

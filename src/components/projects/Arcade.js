import { render } from '@testing-library/react';
import React from 'react';
import playPong from '../../games/pong/pong';

const Arcade = () => {

  const renderArcade = (gameCallback) => {
    const arcadeMachine = document.querySelector(".arcade-machine")
    arcadeMachine.classList.add("on")
    arcadeMachine.classList.add("neo-geo")
    const arcadeHeader = document.querySelector(".arcade-header")
    arcadeHeader.innerHTML = `<h1>NICKY-DOVER™️</h1>`
    arcadeHeader.classList.add("neo-geo")
    gameCallback(document.getElementById("arcade-main"))
  }

  return (<div id="arcade">
    <p>This portion of the website works best in the browser.</p>
    <div class="arcade-machine">
    <div class="arcade-header"></div>
    <div id="arcade-main"></div>
    </div>
    <br/>
    <button onClick={() => renderArcade(playPong)}>Pong</button>
  </div>)
}

export default Arcade;

import React from 'react';
import playPong from '../../games/pong/pong';

const Arcade = () => {
  return (<div id="arcade">
    <p>This portion of the website works best in the browser.</p>
    <canvas id="canvas"></canvas>
    <br/>
    <button onClick={playPong}>Pong</button>
  </div>)
}

export default Arcade;

import React from 'react';
import playPong from '../../games/pong/pong';

const Arcade = () => {
  return (<div id="arcade">
    <p>This portion of the website works best in the browser.</p>
    <div id="arcade-main"></div>
    <br/>
    <button onClick={() => playPong(document.getElementById("arcade-main"))}>Pong</button>
  </div>)
}

export default Arcade;

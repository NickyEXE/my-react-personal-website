import React from "react";
import { Link } from "react-router-dom";

export default function PongReadme(){

  return <>
  <h1>Pong</h1>
  <p>One of the oldest video games, it also was one of the first games I built in JS. (The first one is available <Link to="/projects/xreader">here.</Link>)</p>
  <p>The left paddle is controlled by the W (up) and S (down) keys.</p>
  <p>The right paddle is controlled by the up and down keys.</p>
  <p>The goal is to bounce the ball past the opponent's paddle.</p>
  <p>You can slice the ball by hitting it with the edge of your paddle.</p>
  <p>Config options to change speed, paddle size, slicing efficacy, and more coming soon!</p>
  </>


}

import React from "react";

export default function DivekickReadme(){

  return <>
  <h1>Divekick!</h1>
  <p>In this app, I ripped off the best 2D two-button instant-KO fighter indie game, <a href="http://www.divekick.com/">Divekick!</a></p>
  <p>Your goal is to collide with the other player in such a way that you are higher than them at the time of the initial collision (thus, kicking them.)</p>
  <p>There are two buttons:</p>
  <p><strong>Dive (P1: A, P2: K):</strong> The game's term for "jump", which sends you straight into the air.</p>
  <p><strong>Kick (P1: S, P2: L):</strong> When jumping, this will send you flying downwards towards the enemy. When on the ground, it will perform a "kickback", allowing you to jump backwards in an arc.</p>
  <p>I built this early on as a coach at Flatiron School, and this clone involves me battling my co-coach at the time, Gracie McGuire.</p>
  <p>(This is flat bad salesmanship, but if you're a potential employer, you'd be remiss if you didn't also check out <a href="https://graciemcguire.com/#/">Gracie's website here.</a>)</p>
  <p>Note: As of writing this, it's showing up as a black screen when deployed on AWS. I'm working on it! If it's not a black screen, it means I fixed it and forgot about this line.</p>
  </>
}

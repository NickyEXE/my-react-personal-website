import React, { useEffect } from "react"
import playPong from '../../games/pong/pong';

export default function Pong(){
  useEffect(() => {
    playPong(document.querySelector("#arcade-main"))
  }, [])

  return <canvas width="1000" height="600"></canvas>
}

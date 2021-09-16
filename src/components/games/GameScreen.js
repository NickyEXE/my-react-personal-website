import React, {useEffect} from "react"

export default function GameScreen(){
  useEffect(() => {
    const canvas = document.createElement("canvas")
    canvas.width = 1000
    canvas.height = 600
    canvas.id = "gameScreen"
    document.querySelector("#arcade-main").appendChild(canvas)
  }, [])
  return <React.Fragment></React.Fragment>
}

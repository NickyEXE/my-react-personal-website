import React, { useEffect } from "react"

export default function PlayGame({game}){
  useEffect(() => {
    console.log("running!")
    const arcadeMain = document.getElementById("arcade-main")
    arcadeMain.innerHTML = ""
    const canvas = document.createElement("canvas")
    canvas.id = "gameScreen"
    canvas.width = 1000
    canvas.height = 800
    canvas.tabIndex = "-1"
    arcadeMain.append(canvas)
    game(canvas)
    return () => {
      document.getElementById("gameScreen").remove()
    }
  }, [game])
  // }, [])

  return <React.Fragment></React.Fragment>
}

import React, { useEffect } from "react"

export default function PlayGame({game}){
  useEffect(() => {
    const arcadeMain = document.getElementById("arcade-main")
    arcadeMain.innerHTML = ""
    const canvas = document.createElement("canvas")
    canvas.id = "gameScreen"
    canvas.width = 1000
    canvas.height = 800
    canvas.tabIndex = "-1"
    arcadeMain.append(canvas)
    const cleanup = game(canvas)
    return () => {
      arcadeMain.innerHTML = ""
      console.dir(game)
      if (typeof cleanup == "function"){cleanup()} else {
        cleanup.then(cleanUpFunction => cleanUpFunction())
      }
    }
  }, [game])
  // }, [])

  return <React.Fragment></React.Fragment>
}

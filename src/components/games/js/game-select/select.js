export default function select(canvas){
  const ctx = canvas.getContext("2d")
  ctx.textAlign = "center"
  ctx.font = '48px "Press Start 2P"'
  ctx.fillStyle = "red"
  ctx.fillText("Select Game", canvas.width/2, canvas.height/2 - 62)
  ctx.font = '24px "Press Start 2P"'
  ctx.fillStyle = "yellow"
  ctx.fillText("Explanation of the Arcade", canvas.width/2, canvas.height/2 -2)
  ctx.fillText("and Games will Appear Below", canvas.width/2, canvas.height/2 + 38)
  return ()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }
}

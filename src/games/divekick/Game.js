import Avatar from "./Avatar.js"
import imageAdapter from "./ImageAdapter.js"


export default class Game {

  constructor(canvas, images){
    this.canvas = canvas
    this.images = images
    this.initialize()
  }

  loop = () => {
    const {canvas, images, player1, player2} = this
    Avatar.executeCharacterMovement()
    const ctx = canvas.getContext('2d');
    ctx.drawImage(images.background, 0, 0)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // refactor drawImage to player method
    this.drawImage(ctx, this.player1)
    this.drawImage(ctx, this.player2)
    ctx.font = "24px Comic Sans MS"
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText(`SEC SIMULATOR`, canvas.width/2, 30)
    ctx.fillText(`${player1.name} - ${player1.score}`, 100, 80)
    ctx.fillText(`${player2.name} - ${player2.score}`, canvas.width - 100, 80)
    ctx.fillStyle = "yellow";
    ctx.fillText(`Round ${Avatar.round()}`, canvas.width/2, 80)
    Avatar.justWon && ctx.fillText(`${Avatar.lastWinner.toUpperCase()} WINS`, canvas.width/2, canvas.height/2)
    this.animationFrame = requestAnimationFrame(this.loop)
  }

  initialize(){
    Avatar.initializeAvatarsAndGameConstants(this.canvas)
    this.player1 = new Avatar("Gracie", Avatar.avatarWidth, 1)
    this.player2 = new Avatar("Nicky", this.canvas.width - (2*Avatar.avatarWidth), -1)
    this.initialKeyBinds()
    this.setEventListeners()
    this.loop()
  }

  setEventListeners = () => {
    this.canvas.addEventListener("keydown", this.handleKeyDown)
    this.canvas.addEventListener("keyup", this.handleKeyUp)
  }

  handleKeyDown = ({key}) => {
    if (this.pressedKeys[key.toLowerCase()]){
      this.pressedKeys[key.toLowerCase()].pressed = true
      this.runKeys()}
  }

  handleKeyUp = ({key}) => {
    if (this.pressedKeys[key.toLowerCase()]){
      this.pressedKeys[key.toLowerCase()].pressed = false
      this.runKeys()}
  }

  runKeys = () => {
    const { pressedKeys } = this
    Object.keys(pressedKeys).forEach(key => pressedKeys[key].pressed === true && pressedKeys[key].func())
  }

  drawImage = (ctx, avatar) => {
    const { images, canvas } = this
    const image = images[avatar.imageIdWithDirection()]
    !!avatar.knockedOut() ?
    ctx.drawImage(image, avatar.x, canvas.height-Avatar.avatarWidth, Avatar.avatarHeight, Avatar.avatarWidth) :
    ctx.drawImage(image, avatar.x, avatar.y, Avatar.avatarWidth, Avatar.avatarHeight)
  }

  initialKeyBinds = () => {
    const {player1, player2} = this
    this.pressedKeys = {
      "a": {pressed: false,
          func: () => player1.dive()},
      "s": {pressed: false,
          func: () => player1.kick()},
      "k": {pressed: false,
          func: () => player2.dive()},
      "l": {pressed: false,
          func: () => player2.kick()}
    }
  }

  cleanup = () => {
    this.canvas.removeEventListener("keydown", this.handleKeyDown)
    this.canvas.removeEventListener("keyup", this.handleKeyUp)
    cancelAnimationFrame(this.animationFrame)
  }



}

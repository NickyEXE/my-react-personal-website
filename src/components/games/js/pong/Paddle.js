export default class Paddle {
  constructor(direction, ctx, config, canvas){
      this.direction = direction
      this.y = config.canvasHeight/2 - config.paddleHeight/2
      direction === 1 ? this.x = 0 : this.x = config.canvasWidth - config.paddleWidth
      this.score = 0
      this.ctx = ctx
      this.config = config
      this.canvas = canvas
  }

  render = () => {
      this.ctx.fillStyle = "#FF0000";
      this.ctx.fillRect(this.x, this.y, this.config.paddleWidth, this.config.paddleHeight);
      this.ctx.font = "30px Arial";
      this.ctx.fillText(this.score, this.canvas.width/2 + (200 * this.direction), 50);
  }

  checkCollision = (ball) => {
      return !!((this.y <= (ball.y + ball.r)) && (this.y + this.config.paddleHeight >= (ball.y - ball.r)))
  }

  moveDown = () => {
      this.y += this.config.paddleSpeed;
      (this.y + this.config.paddleHeight > this.canvas.height) && (this.y = this.canvas.height - this.config.paddleHeight)
  }

  moveUp = () => {
      this.y -= this.config.paddleSpeed
      this.y < 0 && (this.y = 0)
  }

  win = () => this.score ++
}

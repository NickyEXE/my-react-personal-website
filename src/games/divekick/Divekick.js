import Avatar from "./Avatar.js"
import slidapter from "./slidapter.js"
import imageAdapter from "./ImageAdapter.js"

export default async function DiveKick(canvas){
  const images = await loadAllImages()
  const config = slidapter(canvas)
  Avatar.initializeAvatarsAndGameConstants(canvas)
  const gracie = new Avatar("Gracie", Avatar.avatarWidth, 1)
  const nicky = new Avatar("Nicky", canvas.width - (2*Avatar.avatarWidth), -1)
  function loop(){
      Avatar.executeCharacterMovement()
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawImage(ctx, gracie)
      drawImage(ctx, nicky)
      ctx.font = "24px Comic Sans MS"
      ctx.fillStyle = "red";
      ctx.textAlign = "center";
      ctx.fillText(`SEC SIMULATOR`, canvas.width/2, 30)
      ctx.fillText(`${gracie.name} - ${gracie.score}`, 100, 80)
      ctx.fillText(`${nicky.name} - ${nicky.score}`, canvas.width - 100, 80)
      ctx.fillStyle = "yellow";
      ctx.fillText(`Round ${Avatar.round()}`, canvas.width/2, 80)
      Avatar.justWon && ctx.fillText(`${Avatar.lastWinner.toUpperCase()} WINS`, canvas.width/2, canvas.height/2)
      requestAnimationFrame(loop)
  }

  function drawImage(ctx, avatar){
    const image = images[avatar.imageIdWithDirection()]
    !!avatar.knockedOut() ? ctx.drawImage(image, avatar.x, canvas.height-Avatar.avatarWidth, Avatar.avatarHeight, Avatar.avatarWidth) : ctx.drawImage(image, avatar.x, avatar.y, Avatar.avatarWidth, Avatar.avatarHeight)
  }

  const pressedKeys = {
      "a": {pressed: false,
          func: () => gracie.dive()},
      "s": {pressed: false,
          func: () => gracie.kick()},
      "k": {pressed: false,
          func: () => nicky.dive()},
      "l": {pressed: false,
          func: () => nicky.kick()}
      }

  function handleKeyDown(e){
      if (pressedKeys[e.key.toLowerCase()]){
      pressedKeys[e.key.toLowerCase()].pressed = true
      runKeys()}
  }

  function handleKeyUp(e){
      if (pressedKeys[e.key.toLowerCase()]){
      pressedKeys[e.key.toLowerCase()].pressed = false
      runKeys()}
  }

  function runKeys(){
      Object.keys(pressedKeys).forEach(key => pressedKeys[key].pressed ===true && pressedKeys[key].func())
  }

  function handleSlider(e){
      config[e.target.id](e.target.value)
  }

  function resetDefaults(){
      Object.keys(defaultValueSet).forEach(key => document.getElementById(key).value = defaultValueSet[key])
      Avatar.resetDefaults()
      Avatar.all.forEach(avatar => avatar.y = Avatar.initialAvatarY)
  }

  // The slider values often have decimal places and stuff that
  const defaultValueSet = {
      "gravity": Avatar.gravity*1000,
      "jumpInitialVelocity": Avatar.jumpInitialVelocity*-1,
      "kickYSpeed": Avatar.kickYSpeed,
      "kickXSpeed": Avatar.kickXSpeed,
      "kickbackYSpeed": Avatar.kickbackYSpeed*-1,
      "kickbackXSpeed": Avatar.kickbackXSpeed*10,
      "avatarWidth": Avatar.avatarWidth,
      "avatarHeight": Avatar.avatarHeight
  }

  document.addEventListener("keydown", handleKeyDown)
  document.addEventListener("keyup", handleKeyUp)
  // document.getElementById("sliders").addEventListener("change", handleSlider)
  // document.getElementById("reset-defaults").addEventListener("click", resetDefaults)
  console.log(canvas)

  loop()
}

function loadAllImages(){
    return new Promise(resolve => {
    let images = {...imageAdapter}
    Object.keys(images).forEach(key => {
        const image = new Image()
        image.src = images[key]
        image.alt = key
        images[key] = image
        image.onload = () => {if (++images.loaded === 8){
          resolve(images)
        }}
        })
      images.loaded = 0
    })
}

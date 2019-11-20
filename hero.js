
class Hero {
  constructor() {
  	//position
    this.x = gridSize * 3.5
    this.y = 0

    //velocity
    this.dx = 0
    this.dy = 0

    this.airborne = true
  }

  jump(){
  	if(this.airborne){
  		return
  	}
  	this.airborne = true
  	this.dy = 0 - (gridSize / 3)
  }

  moveLeft(){
  	this.dx = 0 - (gridSize /10)
  }

  moveRight(){
  	this.dx = gridSize / 10
  }

  step() {
  	//apply velocity to position
    this.x += this.dx
    this.y += this.dy //gravity is increasing velocity

    this.dx *= 0.7
    this.dy += gridSize / 60

    let groundLevel = canvas.height - gridSize
    if(this.y > groundLevel){
    	this.y = groundLevel
    	this.airborne = false
    }
  }

  draw() {
  	let image = heroStandSprite.image
  	if(Math.abs(this.dx > 0.1)){
  		image = heroWalkSprite1.image
  	}
  	if(this.airborne){
  		image = heroJumpSprite.image
  	}
  	ctx.drawImage(
  		image, 
  		this.x - gridSize/2,
  		this.y - gridSize,
  		gridSize,
  		gridSize
  	)
    ctx.fillStyle = 'black'
    ctx.beginPath()
    ctx.arc(this.x, this.y, 3, 0, 2*Math.PI, false)
    ctx.fill()
  }
}

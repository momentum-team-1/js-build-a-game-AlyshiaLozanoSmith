class Game{
    constructor(){
        const  gameScreen = document.getElementById('gamescreen')
        const  screen = gameScreen.getContext('2d')
        let gameSize = { x: gameScreen.width, y: gameScreen.height}
        this.player = new Player(gameSize)
        let animate = () => {
            this.update()
            this.drawPlayer(screen, gameSize)
            requestAnimationFrame(animate)
          }
          animate()

                
    }
    draw(screen , gameSize){
        screen.clearRect(0,0,gameSize.x, gameSize.y )
    }
    
    drawPlayer (screen , gameSize) {
        screen.clearRect(0, 0, gameSize.x, gameSize.y)
        console.log('Draw player method called')
        screen.fillStyle = 'black'
        let startingXPosition = this.player.center.x - this.player.size.x / 2
        let startingYPosition = this.player.center.y - this.player.size.y / 2
        let playerWidth = this.player.size.x
        let playerHeight = this.player.size.y
        screen.fillRect(startingXPosition, startingYPosition, playerWidth, playerHeight)
      }

      update(){
          this.player.update()
      }
}


class Player{
    constructor(gameSize){
       this.size = {x:30 , y:30}
       this.center = { x: gameSize.x / 2, y: gameSize.y - this.size.y * 2 }
       this.keyboarder = Keyboarder
    }

    update () {
        if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
            this.center.x += 2
        } else if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
            this.center.x -= 2
        } else if (this.keyboarder.isDown(this.keyboarder.KEYS.UP)){
            this.center.y -= 2
        } else if(this.keyboarder.isDown(this.keyboarder.KEYS.DOWN)){
            this.center.y += 2
        }

      }
}

new Game()
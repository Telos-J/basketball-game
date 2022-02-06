import { players, player } from './player.js'
import { controlPlayer } from './control.js'
import { ball } from './ball.js'
function gameLoop() {
    for (const player of players) {
        player.move()
    }
    player.grabBall(ball)
    if(player.hasBall) {
        ball.x = player.x + 18;
        ball.y = player.y + 40;
    }
    ball.move()
    controlPlayer()
    requestAnimationFrame(gameLoop)
}


gameLoop()
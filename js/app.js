import { players, player } from './player.js'
import { controlPlayer } from './control.js'
import { ball } from './ball.js'
function gameLoop() {
    for (const player of players) {
        player.move()
    }
    ball.move()
    controlPlayer()
    requestAnimationFrame(gameLoop)
}


gameLoop()
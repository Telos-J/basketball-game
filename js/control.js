import {player} from './player.js'


const controller = {
    arrowUp: false,
    arrowDown: false,
    arrowLeft: false,
    arrowRight: false
}

function controlPlayer() {
    player.vx = 0
    player.vy = 0
    if (controller.arrowUp) player.vy = -player.speed
    if (controller.arrowDown) player.vy = player.speed
    if (controller.arrowLeft) player.vx = -player.speed
    if (controller.arrowRight) player.vx = player.speed
}

addEventListener('keydown', e => {
    if (e.code === 'ArrowUp') {
       controller.arrowUp = true
    } else if (e.code === 'ArrowLeft'){
        controller.arrowLeft = true
    } else if (e.code === 'ArrowDown'){
        controller.arrowDown = true
    } else if (e.code === 'ArrowRight'){
        controller.arrowRight = true
    } 
})
addEventListener('keyup', e => {
    if (e.code === 'ArrowUp') {
       controller.arrowUp = false
    } else if (e.code === 'ArrowLeft'){
        controller.arrowLeft = false
    } else if (e.code === 'ArrowDown'){
        controller.arrowDown = false
    } else if (e.code === 'ArrowRight'){
        controller.arrowRight = false
    } 
})

export { controlPlayer}
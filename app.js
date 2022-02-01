class Player  {
    constructor(dom, x, y, speed) {
        this.dom = document.querySelector(dom).cloneNode(true);
        document.body.appendChild(this.dom)
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.vx = 0;
        this.vy = 0;
    }
   
    
    move() {
        this.x += this.vx
        this.y += this.vy
        this.dom.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}
const purple = new Player('.purple', 400, 400, 3);
const purple2 = new Player('.purple', 600, 400, 3);
let player = purple

function gameLoop() {
    purple.move()
    purple2.move()
    controlPlayer()
    requestAnimationFrame(gameLoop)
}

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



gameLoop()
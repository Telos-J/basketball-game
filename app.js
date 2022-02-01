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
const purple = new Player('.purple', 750, 435, 3);
const purple2 = new Player('.purple', 805, 380, 3);
const purple3 = new Player('.purple', 805, 495, 3);
const purple4 = new Player('.purple', 650, 435, 3);
const purple5 = new Player('.purple', 500, 435, 3);
let player = purple

function gameLoop() {
    purple.move()
    purple2.move()
    purple3.move()
    purple4.move()
    purple5.move()
    controlPlayer()
    requestAnimationFrame(gameLoop)
    console.log(purple.x,purple.y)
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
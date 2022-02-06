class Player  {
    constructor(dom, x, y, speed) {
        this.dom = document.querySelector(dom).cloneNode(true);
        this.dom.classList.remove('hidden')
        document.querySelector('.arena').appendChild(this.dom)
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
        this.dom.style.zIndex = this.y
    }
}
const purple = new Player('.purple', -120, 40, 3);
const purple2 = new Player('.purple', -120, -50, 3);
const purple3 = new Player('.purple', -200, -10, 3);
const purple4 = new Player('.purple', -300, -10, 3);
const purple5 = new Player('.purple', -400, -10, 3);
let player = purple

function gameLoop() {
    purple.move()
    purple2.move()
    purple3.move()
    purple4.move()
    purple5.move()
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
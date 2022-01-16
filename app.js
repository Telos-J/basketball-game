class Player  {
    constructor(dom, x, y, speed) {
        this.dom = document.querySelector(dom);
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.vx = 0;
        this.vy = 0;
    }
   
    
    move() {
        this.vx = 0
        this.vy = 0
        if (controller.arrowUp) this.vy = -this.speed
        if (controller.arrowDown) this.vy = this.speed
        if (controller.arrowLeft) this.vx = -this.speed
        if (controller.arrowRight) this.vx = this.speed

        this.x += this.vx
        this.y += this.vy
        this.dom.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}
const purple = new Player('.purple', 400, 400, 3);

function gameLoop() {
    purple.move()
    console.log(controller)
    requestAnimationFrame(gameLoop)
}
const controller = {
    arrowUp: false,
    arrowDown: false,
    arrowLeft: false,
    arrowRight: false
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
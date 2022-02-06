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
        this.hasBall = false
    }
   
    
    move() {
        this.x += this.vx
        this.y += this.vy
        this.dom.style.transform = `translate(${this.x}px, ${this.y}px)`
        this.dom.style.zIndex = this.y
    }

    grabBall(ball) {
        if (this.hasBall) return
        const distance = Math.sqrt((this.x - ball.x + 38)**2 + (this.y- ball.y + 60)**2 )
        if (distance < 10){
           this.hasBall = true
        }
    }
}


const smallForward = new Player('.purple', -60, 40, 3);
const shootingGuard = new Player('.purple', -60, -50, 3);
const center = new Player('.purple', -80, -10, 3);
const powerForward = new Player('.purple', -190, -10, 3);
const pointGuard = new Player('.purple', -300, -10, 3);

const players = [smallForward, shootingGuard, center, powerForward, pointGuard]
let player = smallForward

export {players, player}
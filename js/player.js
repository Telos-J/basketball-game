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


const smallForward = new Player('.purple', -60, 40, 3);
const shootingGuard = new Player('.purple', -60, -50, 3);
const center = new Player('.purple', -80, -10, 3);
const powerForward = new Player('.purple', -190, -10, 3);
const pointGuard = new Player('.purple', -300, -10, 3);

const players = [smallForward, shootingGuard, center, powerForward, pointGuard]
let player = smallForward

export {players, player}
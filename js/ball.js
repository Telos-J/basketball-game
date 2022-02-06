class Ball {
    constructor() {
        this.dom = document.querySelector('#basketball')
        this.x = -3;
        this.y = 40;
        this.vx = 0;
        this.vy = 0
    }
    move() {
        this.x += this.vx
        this.y += this.vy
        this.dom.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}

const ball = new Ball()
export { ball }
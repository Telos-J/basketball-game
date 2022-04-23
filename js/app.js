import {ball} from "./gameObjects.js";
import {generateTeams, collectPlayers, updateScore} from "./gameMethods.js";
import {drawBackground, drawCourtLines} from "./drawCourt.js";

function update() {
    for (let player of players) {
        player.initState()
    }

    for (let player of players) {
        if (!player.coolTime) {
            if (player === controlPlayer) player.control(ball, players)
            else player.ai(ball, players);
        }
    }

    for (let player of players) {
        player.animate();
        player.update();
    }

    // updateScore(roster1, roster2);
    ball.update();
}

function render() {
    drawBackground("#d28448");
    drawCourtLines();

    for (let player of players) {
        player.drawPosition()
        // player.drawNeighborhood();
    }

    ball.drawPosition()

    topviewContext.drawImage(
        buffer.canvas,
        0,
        0,
        buffer.canvas.width,
        buffer.canvas.height,
        0,
        0,
        topview.width,
        topview.height
    );
}

const [roster1, roster2] = generateTeams();
const players = collectPlayers(roster1, roster2);
let controlPlayer = roster1.players[0];
controlPlayer.playerDOM.querySelector('.pointer').style.display = 'block'
const engine = new Engine(1000 / 30, update, render);

resize();

for (let player of players) {
    player.playerDOM.style.display = 'flex'
    player.playerDOM.addEventListener('click', () => {
        controlPlayer.playerDOM.querySelector('.pointer').style.display = 'none'
        controlPlayer = player
        controlPlayer.playerDOM.querySelector('.pointer').style.display = 'block'
    })
}
ball.DOM.style.display = 'block'

engine.start();

export function resetPlayers() {
    for (const player of players) {
        player.reset()
    }
}
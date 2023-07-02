import { Canvas, Colors } from "../index.js"

const canvas = new Canvas("click here", 500, 500);

canvas.onClick((x, y) => {
    canvas.drawRectangle(Colors.RED, {x: x, y: y}, 10, 10);
});

async function loop() {
    while (true) canvas.drawPoint(Colors.BLUE, {x: 0, y: 0});
}

loop();
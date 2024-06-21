// import Point from "./point.js";

function setup() {
    createCanvas(600, 600);
    translate(height / 2, width / 2);
    background(0);

    for (let i = 0; i < 3; i++) {
        points[i].show();
    }
}
let points = [new Point(200, 200), new Point(-200, 200), new Point(0, -200)];
function draw() {
    translate(height / 2, width / 2);
    if (keyIsPressed && keyCode === 32) {
        points.push(points[points.length - 1].avg(points[floor(random() * 3)]));
        points[points.length - 1].show();
    }
}

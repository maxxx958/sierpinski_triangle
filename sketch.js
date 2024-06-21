// import Point from "./point.js";

function setup() {
    createCanvas(600, 600);
    translate(height / 2, width / 2);
    background(0);

    for (let i = 0; i < 3; i++) {
        points[i].show();
    }
}
let points = [new Point(250, 250), new Point(-250, 250), new Point(0, -250)];
function draw() {
    translate(height / 2, width / 2);
    if (keyIsPressed && keyCode === 32) {
        for (let i = 0; i < 1000; i++) {
            points.push(
                points[points.length - 1].avg(points[floor(random() * 3)])
            );
            points[points.length - 1].show();
        }
    }
}

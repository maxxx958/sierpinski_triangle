function setup() {
    createCanvas(600, 600);
    translate(height / 2, width / 2);
    background(0);
    fill(255);
    textSize(16);
    text("Hold spacebar to draw", -height / 2 + 20, -width / 2 + 30);
    for (let i = 0; i < 3; i++) {
        points[i].show();
    }
}
let points = [new Point(250, 250), new Point(-250, 250), new Point(0, -250)];
function draw() {
    translate(height / 2, width / 2);
    if (keyIsPressed && keyCode === 32) {
        for (let i = 0; i < 50; i++) {
            points.push(
                points[points.length - 1].avg(points[floor(random() * 3)])
            );
            points[points.length - 1].show();
        }
    }
}

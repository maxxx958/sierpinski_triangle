class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    show() {
        stroke(10);
        fill(255);
        circle(this.x, this.y, 2);
    }

    avg(point) {
        let x = (this.x + point.x) / 2;
        let y = (this.y + point.y) / 2;
        return new Point(x, y);
    }
}

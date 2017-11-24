var aufgabe6;
(function (aufgabe6) {
    class MovingObjects {
        constructor(_x, _y, _dx, _dy) {
            this.x = _x;
            this.y = _y;
            this.dx = _dx;
            this.dy = _dy;
        }
        update() {
            this.move();
            this.draw();
        }
        draw() {
            // abstract
        }
        move() {
            // abstract
        }
    }
    aufgabe6.MovingObjects = MovingObjects;
})(aufgabe6 || (aufgabe6 = {}));
//# sourceMappingURL=MovingObjects.js.map
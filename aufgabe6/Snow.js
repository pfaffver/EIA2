var aufgabe6;
(function (aufgabe6) {
    class Snow extends aufgabe6.MovingObjects {
        constructor(_x, _y, _dx, _dy) {
            super(_x + Math.random() * 800, _y + Math.random() * 600, _dx, _dy);
        }
        move() {
            if (this.y > 600) {
                this.y = 0;
            }
            this.y += this.dy;
        }
        draw() {
            //Snow
            aufgabe6.can.beginPath();
            aufgabe6.can.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            aufgabe6.can.fillStyle = "#E6E6E6";
            aufgabe6.can.fill();
        }
    }
    aufgabe6.Snow = Snow;
})(aufgabe6 || (aufgabe6 = {}));
//# sourceMappingURL=Snow.js.map
var aufgabe6;
(function (aufgabe6) {
    class Snow {
        constructor(_x, _y, _dx, _dy) {
            this.x = _x + Math.random() * 800;
            this.y = _y + Math.random() * 600;
            this.dx = _dx;
            this.dy = _dy;
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.y += this.dy;
        }
        draw() {
            //Snow
            aufgabe6.can.beginPath();
            aufgabe6.can.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            aufgabe6.can.fillStyle = "#E6E6E6";
            aufgabe6.can.fill();
        }
        SetSnowToCanvasStartAgain() {
            for (let i = 0; i < Snow.length; i++) {
                if (this.y > 600) {
                    this.y = 0;
                }
            }
        }
    }
    aufgabe6.Snow = Snow;
})(aufgabe6 || (aufgabe6 = {}));
//# sourceMappingURL=Snow.js.map
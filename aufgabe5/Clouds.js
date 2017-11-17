var aufgabe5;
(function (aufgabe5) {
    class Clouds {
        constructor(_x, _y, _dx, _dy) {
            this.x = _x + Math.random() * 800;
            this.y = _y + Math.random() * 100;
            this.dx = _dx;
            this.dy = _dy;
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
        }
        draw() {
            //Wolke
            aufgabe5.can.beginPath();
            aufgabe5.can.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            aufgabe5.can.arc(this.x + 15, this.y + 8, 10, 0, 2 * Math.PI);
            aufgabe5.can.arc(this.x, this.y + 10, 10, 0, 2 * Math.PI);
            aufgabe5.can.arc(this.x - 15, this.y + 8, 10, 0, 2 * Math.PI);
            aufgabe5.can.fillStyle = "#FAFAFA";
            aufgabe5.can.fill();
        }
        SetCloudsToCanvasStartAgain() {
            for (let i = 0; i < Clouds.length; i++) {
                if (this.x > 800) {
                    this.x = 0;
                }
            }
        }
    }
    aufgabe5.Clouds = Clouds;
})(aufgabe5 || (aufgabe5 = {}));
//# sourceMappingURL=Clouds.js.map
var aufgabe5;
(function (aufgabe5) {
    class Skier {
        constructor(_x, _y, _dx, _dy) {
            this.x = _x + Math.random() * 100;
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
            this.y += this.dy;
        }
        draw() {
            //Skifahrer
            aufgabe5.can.beginPath();
            aufgabe5.can.arc(this.x, this.y, 6, 0, 2 * Math.PI);
            aufgabe5.can.fillStyle = this.colorHat;
            aufgabe5.can.fill();
            aufgabe5.can.beginPath();
            aufgabe5.can.arc(this.x, this.y, 6, 0, 1 * Math.PI);
            aufgabe5.can.fillStyle = "#F5A9A9";
            aufgabe5.can.fill();
            /*K�rper*/
            aufgabe5.can.fillStyle = this.colorBody;
            aufgabe5.can.fillRect(this.x - 4, this.y + 6, 9, 16);
            /*Board*/
            aufgabe5.can.beginPath();
            aufgabe5.can.moveTo(this.x - 9, this.y + 19);
            aufgabe5.can.lineTo(this.x - 9, this.y + 21);
            aufgabe5.can.lineTo(this.x + 10, this.y + 28);
            aufgabe5.can.lineTo(this.x + 10, this.y + 26);
            aufgabe5.can.closePath();
            aufgabe5.can.stroke();
            aufgabe5.can.fillStyle = "#1C1C1C";
            aufgabe5.can.fill();
        }
        setRandomStyle() {
            this.colorHat = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            this.colorBody = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
        SetSkierToCanvasStartAgain() {
            for (let i = 0; i < Skier.length; i++) {
                if (this.x > 800) {
                    this.x = 0;
                    this.y = 240 + Math.random() * 100;
                }
            }
        }
    }
    aufgabe5.Skier = Skier;
})(aufgabe5 || (aufgabe5 = {}));
//# sourceMappingURL=Skier.js.map
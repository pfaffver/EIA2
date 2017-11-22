var aufgabe6;
(function (aufgabe6) {
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
            aufgabe6.can.beginPath();
            aufgabe6.can.arc(this.x, this.y, 6, 0, 2 * Math.PI);
            aufgabe6.can.fillStyle = this.colorHat;
            aufgabe6.can.fill();
            aufgabe6.can.beginPath();
            aufgabe6.can.arc(this.x, this.y, 6, 0, 1 * Math.PI);
            aufgabe6.can.fillStyle = "#F5A9A9";
            aufgabe6.can.fill();
            /*K�rper*/
            aufgabe6.can.fillStyle = this.colorBody;
            aufgabe6.can.fillRect(this.x - 4, this.y + 6, 9, 16);
            /*Board*/
            aufgabe6.can.beginPath();
            aufgabe6.can.moveTo(this.x - 9, this.y + 19);
            aufgabe6.can.lineTo(this.x - 9, this.y + 21);
            aufgabe6.can.lineTo(this.x + 10, this.y + 28);
            aufgabe6.can.lineTo(this.x + 10, this.y + 26);
            aufgabe6.can.closePath();
            aufgabe6.can.stroke();
            aufgabe6.can.fillStyle = "#1C1C1C";
            aufgabe6.can.fill();
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
    aufgabe6.Skier = Skier;
})(aufgabe6 || (aufgabe6 = {}));
//# sourceMappingURL=Skier.js.map
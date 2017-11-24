var aufgabe6;
(function (aufgabe6) {
    class Clouds extends aufgabe6.MovingObjects {
        //        x: number;
        //        y: number;
        //        dx: number;
        //        dy: nu       
        constructor(_x, _y, _dx, _dy) {
            super(_x, _y, _dx, _dy);
        }
        //        update(): void {
        //            this.move();
        //            thi;
        //        }
        move() {
            if (this.x > 800) {
                this.x = 0;
            }
            this.x += this.dx;
        }
        draw() {
            //Wolke
            aufgabe6.can.beginPath();
            aufgabe6.can.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            aufgabe6.can.arc(this.x + 15, this.y + 8, 10, 0, 2 * Math.PI);
            aufgabe6.can.arc(this.x, this.y + 10, 10, 0, 2 * Math.PI);
            aufgabe6.can.arc(this.x - 15, this.y + 8, 10, 0, 2 * Math.PI);
            aufgabe6.can.fillStyle = "#FAFAFA";
            aufgabe6.can.fill();
        }
    }
    aufgabe6.Clouds = Clouds;
})(aufgabe6 || (aufgabe6 = {}));
//# sourceMappingURL=Clouds.js.map
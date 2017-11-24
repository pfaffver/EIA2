namespace aufgabe6 {
    export class Snow extends MovingObjects {

        constructor(_x: number, _y: number, _dx: number, _dy: number) {
            super(_x + Math.random() * 800, _y + Math.random() * 600, _dx, _dy);
        }

        move(): void {
            if (this.y > 600) {
                this.y = 0;
            }
            this.y += this.dy;
        }

        draw(): void {
            //Snow
            can.beginPath();
            can.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            can.fillStyle = "#E6E6E6";
            can.fill();
        }

    }

}
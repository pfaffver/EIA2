namespace aufgabe6 {
    export class Clouds extends MovingObjects {

        //        x: number;
        //        y: number;
        //        dx: number;        //        dy: nu       
        constructor(_x: number, _y: number, _dx: number, _dy: number) {
            super(_x, _y, _dx, _dy);
        }

        //        update(): void {
        //            this.move();
        //            thi;
        //        }

        move(): void {
            if (this.x > 800) {
                this.x = 0;
            }
            this.x += this.dx;
        }

        draw(): void {
            //Wolke
            can.beginPath();
            can.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            can.arc(this.x + 15, this.y + 8, 10, 0, 2 * Math.PI);
            can.arc(this.x, this.y + 10, 10, 0, 2 * Math.PI);
            can.arc(this.x - 15, this.y + 8, 10, 0, 2 * Math.PI);
            can.fillStyle = "#FAFAFA";
            can.fill();
        }

    }

}
namespace aufgabe6 {
    export class Skier extends MovingObjects {
        colorHat: string;
        colorBody: string;

        constructor(_x: number, _y: number, _dx: number, _dy: number) {
            super(_x + Math.random() * 100, _y + Math.random() * 100, _dx, _dy);
        }

        move(): void {
            if (this.x > 800) {
                this.x = 0;
                this.y = 240 + Math.random() * 100;
            }
            this.x += this.dx;
            this.y += this.dy;
        }

        draw(): void {
            //Skifahrer
            can.beginPath();
            can.arc(this.x, this.y, 6, 0, 2 * Math.PI);
            can.fillStyle = this.colorHat;
            can.fill();
            can.beginPath();
            can.arc(this.x, this.y, 6, 0, 1 * Math.PI);
            can.fillStyle = "#F5A9A9";
            can.fill();
            /*Körper*/
            can.fillStyle = this.colorBody;
            can.fillRect(this.x - 4, this.y + 6, 9, 16);
            /*Board*/
            can.beginPath();
            can.moveTo(this.x - 9, this.y + 19);
            can.lineTo(this.x - 9, this.y + 21);
            can.lineTo(this.x + 10, this.y + 28);
            can.lineTo(this.x + 10, this.y + 26);
            can.closePath();
            can.stroke();
            can.fillStyle = "#1C1C1C";
            can.fill();
        }

        setRandomStyle(): void {
            this.colorHat = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            this.colorBody = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }

    }

}
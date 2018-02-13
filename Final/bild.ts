namespace final {

    export class bild {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;

        }

        draw(): void {

            can.beginPath();
            can.moveTo(this.x + 65, this.y + 50);
            can.lineTo(this.x + 35, this.y + 50);
            can.lineTo(this.x + 50, this.y + 90);
            can.closePath();
            can.fillStyle = "#8A4B08";
            can.fill();

            can.beginPath();
            can.moveTo(this.x + 55, this.y + 50);
            can.lineTo(this.x + 80, this.y + 10);
            can.strokeStyle = "#2E64FE";
            can.stroke();

            can.beginPath();
            can.moveTo(this.x + 80, this.y + 10);
            can.lineTo(this.x + 70, this.y + 10);
            can.lineTo(this.x + 85, this.y + 20);
            can.closePath();
            can.stroke();
            can.fillStyle = "#2E64FE";
            can.fill();

            can.beginPath();
            can.arc(this.x + 80, this.y + 10, 2, 0, 2 * Math.PI);
            can.fillStyle = "#2E64FE";
            can.fill();

            can.beginPath();
            can.arc(this.x + 40, this.y + 45, 12, 0, 2 * Math.PI);
            can.fillStyle = "#FA5858";
            can.fill();

            can.beginPath();
            can.arc(this.x + 60, this.y + 45, 12, 0, 2 * Math.PI);
            can.fillStyle = "#F7FE2E";
            can.fill();

            can.beginPath();
            can.arc(this.x + 50, this.y + 30, 12, 0, 2 * Math.PI);
            can.fillStyle = "#3B240B";
            can.fill();
        }
    }
}
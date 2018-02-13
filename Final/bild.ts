namespace final {

    export class bild {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;

        }

        draw(): void {
            //Hintergrund
            can.fillStyle = "#E3CEF6";
            can.fillRect(this.x, this.y, 150, 100);

            //Waffel
            can.beginPath();
            can.moveTo(this.x + 65, this.y + 50);
            can.lineTo(this.x + 35, this.y + 50);
            can.lineTo(this.x + 50, this.y + 90);
            can.closePath();
            can.fillStyle = "#8A4B08";
            can.fill();

            //Schirmchen
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

            //Schirmchen Spitze
            can.beginPath();
            can.arc(this.x + 80, this.y + 10, 2, 0, 2 * Math.PI);
            can.fillStyle = "#2E64FE";
            can.fill();

            //Erdbeere
            can.beginPath();
            can.arc(this.x + 40, this.y + 45, 12, 0, 2 * Math.PI);
            can.fillStyle = "#FA5858";
            can.fill();

            //Vanille
            can.beginPath();
            can.arc(this.x + 60, this.y + 45, 12, 0, 2 * Math.PI);
            can.fillStyle = "#F7FE2E";
            can.fill();

            //Schokolade
            can.beginPath();
            can.arc(this.x + 50, this.y + 30, 12, 0, 2 * Math.PI);
            can.fillStyle = "#3B240B";
            can.fill();
        }
    }
}
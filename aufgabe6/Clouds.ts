namespace aufgabe6 {
    export class Clouds {
        x: number;
        y: number;
        dx: number;
        dy: number;

        constructor(_x: number, _y: number, _dx: number, _dy: number) {
            this.x = _x + Math.random() * 800;
            this.y = _y + Math.random() * 100;
            this.dx = _dx;
            this.dy = _dy;
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
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

        SetCloudsToCanvasStartAgain(): void {
            for (let i: number = 0; i < Clouds.length; i++) {
                if (this.x > 800) {
                    this.x = 0;  
                }
            }
        }
    }

}
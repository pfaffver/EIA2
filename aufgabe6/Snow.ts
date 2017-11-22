namespace aufgabe6 {
    export class Snow {
        x: number;
        y: number;
        dx: number;
        dy: number;

        constructor(_x: number, _y: number, _dx: number, _dy: number) {
            this.x = _x + Math.random() * 800;
            this.y = _y + Math.random() * 600;
            this.dx = _dx;
            this.dy = _dy;
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.y += this.dy;
        }

        draw(): void {
            //Snow
            can.beginPath();
            can.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            can.fillStyle = "#E6E6E6";
            can.fill();
        }

        SetSnowToCanvasStartAgain(): void {
            for (let i: number = 0; i < Snow.length; i++) {
                if (this.y > 600) {
                    this.y = 0;
                }
            }
        }
    }

}
namespace aufgabe6 {

    export class MovingObjects {
        x: number;
        y: number;
        dx: number;
        dy: number;

        constructor(_x: number, _y: number, _dx: number, _dy: number) {
            this.x = _x;
            this.y = _y;
            this.dx = _dx;
            this.dy = _dy;
        }
        
        update(): void {
            this.move();
            this.draw();
        }
        
        draw(): void {
            // abstract
        }

        move(): void {
            // abstract
        }
        
    }
}
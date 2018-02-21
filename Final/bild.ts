/* Endaufgabe
Name: Verena Pfaff 
Matrikel: 256543
Datum: 13.02.2018 */

namespace final {

    export class bild {
        x: number;
        y: number;
        color: string;

        constructor(_x: number, _y: number, _color: string) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
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
            
            //Waffelstriche von rechts nach links
            can.beginPath();
            can.moveTo(this.x + 40, this.y + 60);
            can.lineTo(this.x + 65, this.y + 50);
            can.strokeStyle = "#61210B";
            can.stroke();
            
            can.beginPath();
            can.moveTo(this.x + 41, this.y + 65);
            can.lineTo(this.x + 65, this.y + 55);
            can.strokeStyle = "#61210B";
            can.stroke();
            
            can.beginPath();
            can.moveTo(this.x + 43, this.y + 70);
            can.lineTo(this.x + 60, this.y + 62);
            can.strokeStyle = "#61210B";
            can.stroke();
            
            can.beginPath();
            can.moveTo(this.x + 45, this.y + 75);
            can.lineTo(this.x + 58, this.y + 69);
            can.strokeStyle = "#61210B";
            can.stroke();
            
            can.beginPath();
            can.moveTo(this.x + 47, this.y + 80);
            can.lineTo(this.x + 55, this.y + 76);
            can.strokeStyle = "#61210B";
            can.stroke();
            
            //Waffelstriche von links nach rechts
            can.beginPath();
            can.moveTo(this.x + 35, this.y + 55);
            can.lineTo(this.x + 60, this.y + 62);
            can.strokeStyle = "#61210B";
            can.stroke();
            
            can.beginPath();
            can.moveTo(this.x + 40, this.y + 62);
            can.lineTo(this.x + 58, this.y + 68);
            can.strokeStyle = "#61210B";
            can.stroke();
            
            can.beginPath();
            can.moveTo(this.x + 45, this.y + 70);
            can.lineTo(this.x + 56, this.y + 74);
            can.strokeStyle = "#61210B";
            can.stroke();
            
            can.beginPath();
            can.moveTo(this.x + 46, this.y + 75);
            can.lineTo(this.x + 54, this.y + 79);
            can.strokeStyle = "#61210B";
            can.stroke();
                        
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
            can.fillStyle = this.color;
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
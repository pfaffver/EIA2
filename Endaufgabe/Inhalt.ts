namespace endaufgabe {
    
    export class Inhalt {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
           // this.x = _x + Math.random() * 800;
           // this.y = _y + Math.random() * 100;
            this.x = _x;
            this.y = _y;
        }

        draw(crc2:any): void {
            
            crc2.fillStyle = "#E3CEF6";
            crc2.fillRect(0, 0, 150, 100);
 
            crc2.beginPath();
            crc2.moveTo(65, 50);
            crc2.lineTo(35, 50);
            crc2.lineTo(50, 90);
            crc2.closePath();
            crc2.fillStyle = "#8A4B08";
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(55, 50);
            crc2.lineTo(80, 10);
            crc2.strokeStyle = "#2E64FE";
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(80, 10);
            crc2.lineTo(70, 10);
            crc2.lineTo(85, 20);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "#2E64FE";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(80, 10, 2, 0, 2 * Math.PI);
            crc2.fillStyle = "#2E64FE";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(40, 45, 12, 0, 2 * Math.PI);
            crc2.fillStyle = "#FA5858";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(60, 45, 12, 0, 2 * Math.PI);
            crc2.fillStyle = "#F7FE2E";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(50, 30, 12, 0, 2 * Math.PI);
            crc2.fillStyle = "#3B240B";
            crc2.fill();
        }
    }
}
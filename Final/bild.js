/* Endaufgabe
Name: Verena Pfaff
Matrikel: 256543
Datum: 13.02.2018 */
var finalx;
(function (finalx) {
    class bild {
        constructor(_x, _y, _color) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
        }
        draw() {
            //Hintergrund
            finalx.can.fillStyle = "#E3CEF6";
            finalx.can.fillRect(this.x, this.y, 150, 100);
            //Waffel
            finalx.can.beginPath();
            finalx.can.moveTo(this.x + 65, this.y + 50);
            finalx.can.lineTo(this.x + 35, this.y + 50);
            finalx.can.lineTo(this.x + 50, this.y + 90);
            finalx.can.closePath();
            finalx.can.fillStyle = "#8A4B08";
            finalx.can.fill();
            //Waffelstriche von rechts nach links
            finalx.can.beginPath();
            finalx.can.moveTo(this.x + 40, this.y + 60);
            finalx.can.lineTo(this.x + 65, this.y + 50);
            finalx.can.strokeStyle = "#61210B";
            finalx.can.stroke();
            finalx.can.beginPath();
            finalx.can.moveTo(this.x + 41, this.y + 65);
            finalx.can.lineTo(this.x + 65, this.y + 55);
            finalx.can.strokeStyle = "#61210B";
            finalx.can.stroke();
            finalx.can.beginPath();
            finalx.can.moveTo(this.x + 43, this.y + 70);
            finalx.can.lineTo(this.x + 60, this.y + 62);
            finalx.can.strokeStyle = "#61210B";
            finalx.can.stroke();
            finalx.can.beginPath();
            finalx.can.moveTo(this.x + 45, this.y + 75);
            finalx.can.lineTo(this.x + 58, this.y + 69);
            finalx.can.strokeStyle = "#61210B";
            finalx.can.stroke();
            finalx.can.beginPath();
            finalx.can.moveTo(this.x + 47, this.y + 80);
            finalx.can.lineTo(this.x + 55, this.y + 76);
            finalx.can.strokeStyle = "#61210B";
            finalx.can.stroke();
            //Waffelstriche von links nach rechts
            finalx.can.beginPath();
            finalx.can.moveTo(this.x + 35, this.y + 55);
            finalx.can.lineTo(this.x + 60, this.y + 62);
            finalx.can.strokeStyle = "#61210B";
            finalx.can.stroke();
            finalx.can.beginPath();
            finalx.can.moveTo(this.x + 40, this.y + 62);
            finalx.can.lineTo(this.x + 58, this.y + 68);
            finalx.can.strokeStyle = "#61210B";
            finalx.can.stroke();
            finalx.can.beginPath();
            finalx.can.moveTo(this.x + 45, this.y + 70);
            finalx.can.lineTo(this.x + 56, this.y + 74);
            finalx.can.strokeStyle = "#61210B";
            finalx.can.stroke();
            finalx.can.beginPath();
            finalx.can.moveTo(this.x + 46, this.y + 75);
            finalx.can.lineTo(this.x + 54, this.y + 79);
            finalx.can.strokeStyle = "#61210B";
            finalx.can.stroke();
            //Schirmchen
            finalx.can.beginPath();
            finalx.can.moveTo(this.x + 55, this.y + 50);
            finalx.can.lineTo(this.x + 80, this.y + 10);
            finalx.can.strokeStyle = "#2E64FE";
            finalx.can.stroke();
            finalx.can.beginPath();
            finalx.can.moveTo(this.x + 80, this.y + 10);
            finalx.can.lineTo(this.x + 70, this.y + 10);
            finalx.can.lineTo(this.x + 85, this.y + 20);
            finalx.can.closePath();
            finalx.can.stroke();
            finalx.can.fillStyle = "#2E64FE";
            finalx.can.fill();
            //Schirmchen Spitze
            finalx.can.beginPath();
            finalx.can.arc(this.x + 80, this.y + 10, 2, 0, 2 * Math.PI);
            finalx.can.fillStyle = "#2E64FE";
            finalx.can.fill();
            //Erdbeere
            finalx.can.beginPath();
            finalx.can.arc(this.x + 40, this.y + 45, 12, 0, 2 * Math.PI);
            finalx.can.fillStyle = this.color;
            finalx.can.fill();
            //Vanille
            finalx.can.beginPath();
            finalx.can.arc(this.x + 60, this.y + 45, 12, 0, 2 * Math.PI);
            finalx.can.fillStyle = "#F7FE2E";
            finalx.can.fill();
            //Schokolade
            finalx.can.beginPath();
            finalx.can.arc(this.x + 50, this.y + 30, 12, 0, 2 * Math.PI);
            finalx.can.fillStyle = "#3B240B";
            finalx.can.fill();
        }
    }
    finalx.bild = bild;
})(finalx || (finalx = {}));
//# sourceMappingURL=bild.js.map
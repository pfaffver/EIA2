/* Endaufgabe
Name: Verena Pfaff
Matrikel: 256543
Datum: 13.02.2018 */
var finalaufgabe;
(function (finalaufgabe) {
    class bild {
        constructor(_x, _y, _color) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
        }
        draw() {
            //Hintergrund
            finalaufgabe.can.fillStyle = "#E3CEF6";
            finalaufgabe.can.fillRect(this.x, this.y, 150, 100);
            //Waffel
            finalaufgabe.can.beginPath();
            finalaufgabe.can.moveTo(this.x + 65, this.y + 50);
            finalaufgabe.can.lineTo(this.x + 35, this.y + 50);
            finalaufgabe.can.lineTo(this.x + 50, this.y + 90);
            finalaufgabe.can.closePath();
            finalaufgabe.can.fillStyle = "#8A4B08";
            finalaufgabe.can.fill();
            //Waffelstriche von rechts nach links
            finalaufgabe.can.beginPath();
            finalaufgabe.can.moveTo(this.x + 40, this.y + 60);
            finalaufgabe.can.lineTo(this.x + 65, this.y + 50);
            finalaufgabe.can.strokeStyle = "#61210B";
            finalaufgabe.can.stroke();
            finalaufgabe.can.beginPath();
            finalaufgabe.can.moveTo(this.x + 41, this.y + 65);
            finalaufgabe.can.lineTo(this.x + 65, this.y + 55);
            finalaufgabe.can.strokeStyle = "#61210B";
            finalaufgabe.can.stroke();
            finalaufgabe.can.beginPath();
            finalaufgabe.can.moveTo(this.x + 43, this.y + 70);
            finalaufgabe.can.lineTo(this.x + 60, this.y + 62);
            finalaufgabe.can.strokeStyle = "#61210B";
            finalaufgabe.can.stroke();
            finalaufgabe.can.beginPath();
            finalaufgabe.can.moveTo(this.x + 45, this.y + 75);
            finalaufgabe.can.lineTo(this.x + 58, this.y + 69);
            finalaufgabe.can.strokeStyle = "#61210B";
            finalaufgabe.can.stroke();
            finalaufgabe.can.beginPath();
            finalaufgabe.can.moveTo(this.x + 47, this.y + 80);
            finalaufgabe.can.lineTo(this.x + 55, this.y + 76);
            finalaufgabe.can.strokeStyle = "#61210B";
            finalaufgabe.can.stroke();
            //Waffelstriche von links nach rechts
            finalaufgabe.can.beginPath();
            finalaufgabe.can.moveTo(this.x + 35, this.y + 55);
            finalaufgabe.can.lineTo(this.x + 60, this.y + 62);
            finalaufgabe.can.strokeStyle = "#61210B";
            finalaufgabe.can.stroke();
            finalaufgabe.can.beginPath();
            finalaufgabe.can.moveTo(this.x + 40, this.y + 62);
            finalaufgabe.can.lineTo(this.x + 58, this.y + 68);
            finalaufgabe.can.strokeStyle = "#61210B";
            finalaufgabe.can.stroke();
            finalaufgabe.can.beginPath();
            finalaufgabe.can.moveTo(this.x + 45, this.y + 70);
            finalaufgabe.can.lineTo(this.x + 56, this.y + 74);
            finalaufgabe.can.strokeStyle = "#61210B";
            finalaufgabe.can.stroke();
            finalaufgabe.can.beginPath();
            finalaufgabe.can.moveTo(this.x + 46, this.y + 75);
            finalaufgabe.can.lineTo(this.x + 54, this.y + 79);
            finalaufgabe.can.strokeStyle = "#61210B";
            finalaufgabe.can.stroke();
            //Schirmchen
            finalaufgabe.can.beginPath();
            finalaufgabe.can.moveTo(this.x + 55, this.y + 50);
            finalaufgabe.can.lineTo(this.x + 80, this.y + 10);
            finalaufgabe.can.strokeStyle = "#2E64FE";
            finalaufgabe.can.stroke();
            finalaufgabe.can.beginPath();
            finalaufgabe.can.moveTo(this.x + 80, this.y + 10);
            finalaufgabe.can.lineTo(this.x + 70, this.y + 10);
            finalaufgabe.can.lineTo(this.x + 85, this.y + 20);
            finalaufgabe.can.closePath();
            finalaufgabe.can.stroke();
            finalaufgabe.can.fillStyle = "#2E64FE";
            finalaufgabe.can.fill();
            //Schirmchen Spitze
            finalaufgabe.can.beginPath();
            finalaufgabe.can.arc(this.x + 80, this.y + 10, 2, 0, 2 * Math.PI);
            finalaufgabe.can.fillStyle = "#2E64FE";
            finalaufgabe.can.fill();
            //Erdbeere
            finalaufgabe.can.beginPath();
            finalaufgabe.can.arc(this.x + 40, this.y + 45, 12, 0, 2 * Math.PI);
            finalaufgabe.can.fillStyle = this.color;
            finalaufgabe.can.fill();
            //Vanille
            finalaufgabe.can.beginPath();
            finalaufgabe.can.arc(this.x + 60, this.y + 45, 12, 0, 2 * Math.PI);
            finalaufgabe.can.fillStyle = "#F7FE2E";
            finalaufgabe.can.fill();
            //Schokolade
            finalaufgabe.can.beginPath();
            finalaufgabe.can.arc(this.x + 50, this.y + 30, 12, 0, 2 * Math.PI);
            finalaufgabe.can.fillStyle = "#3B240B";
            finalaufgabe.can.fill();
        }
    }
    finalaufgabe.bild = bild;
})(finalaufgabe || (finalaufgabe = {}));
//# sourceMappingURL=bild.js.map
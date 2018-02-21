/* Endaufgabe
Name: Verena Pfaff
Matrikel: 256543
Datum: 13.02.2018 */
var final;
(function (final) {
    class bild {
        constructor(_x, _y, _color) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
        }
        draw() {
            //Hintergrund
            final.can.fillStyle = "#E3CEF6";
            final.can.fillRect(this.x, this.y, 150, 100);
            //Waffel
            final.can.beginPath();
            final.can.moveTo(this.x + 65, this.y + 50);
            final.can.lineTo(this.x + 35, this.y + 50);
            final.can.lineTo(this.x + 50, this.y + 90);
            final.can.closePath();
            final.can.fillStyle = "#8A4B08";
            final.can.fill();
            //Waffelstriche von rechts nach links
            final.can.beginPath();
            final.can.moveTo(this.x + 40, this.y + 60);
            final.can.lineTo(this.x + 65, this.y + 50);
            final.can.strokeStyle = "#2A1B0A";
            final.can.stroke();
            final.can.beginPath();
            final.can.moveTo(this.x + 41, this.y + 65);
            final.can.lineTo(this.x + 65, this.y + 55);
            final.can.strokeStyle = "#2A1B0A";
            final.can.stroke();
            final.can.beginPath();
            final.can.moveTo(this.x + 43, this.y + 70);
            final.can.lineTo(this.x + 60, this.y + 62);
            final.can.strokeStyle = "#2A1B0A";
            final.can.stroke();
            final.can.beginPath();
            final.can.moveTo(this.x + 45, this.y + 75);
            final.can.lineTo(this.x + 58, this.y + 69);
            final.can.strokeStyle = "#2A1B0A";
            final.can.stroke();
            final.can.beginPath();
            final.can.moveTo(this.x + 47, this.y + 80);
            final.can.lineTo(this.x + 55, this.y + 76);
            final.can.strokeStyle = "#2A1B0A";
            final.can.stroke();
            //Waffelstriche von links nach rechts
            final.can.beginPath();
            final.can.moveTo(this.x + 35, this.y + 55);
            final.can.lineTo(this.x + 60, this.y + 62);
            final.can.strokeStyle = "#2A1B0A";
            final.can.stroke();
            final.can.beginPath();
            final.can.moveTo(this.x + 40, this.y + 62);
            final.can.lineTo(this.x + 58, this.y + 68);
            final.can.strokeStyle = "#2A1B0A";
            final.can.stroke();
            final.can.beginPath();
            final.can.moveTo(this.x + 45, this.y + 70);
            final.can.lineTo(this.x + 56, this.y + 74);
            final.can.strokeStyle = "#2A1B0A";
            final.can.stroke();
            final.can.beginPath();
            final.can.moveTo(this.x + 46, this.y + 75);
            final.can.lineTo(this.x + 54, this.y + 79);
            final.can.strokeStyle = "#2A1B0A";
            final.can.stroke();
            //Schirmchen
            final.can.beginPath();
            final.can.moveTo(this.x + 55, this.y + 50);
            final.can.lineTo(this.x + 80, this.y + 10);
            final.can.strokeStyle = "#2E64FE";
            final.can.stroke();
            final.can.beginPath();
            final.can.moveTo(this.x + 80, this.y + 10);
            final.can.lineTo(this.x + 70, this.y + 10);
            final.can.lineTo(this.x + 85, this.y + 20);
            final.can.closePath();
            final.can.stroke();
            final.can.fillStyle = "#2E64FE";
            final.can.fill();
            //Schirmchen Spitze
            final.can.beginPath();
            final.can.arc(this.x + 80, this.y + 10, 2, 0, 2 * Math.PI);
            final.can.fillStyle = "#2E64FE";
            final.can.fill();
            //Erdbeere
            final.can.beginPath();
            final.can.arc(this.x + 40, this.y + 45, 12, 0, 2 * Math.PI);
            final.can.fillStyle = this.color;
            final.can.fill();
            //Vanille
            final.can.beginPath();
            final.can.arc(this.x + 60, this.y + 45, 12, 0, 2 * Math.PI);
            final.can.fillStyle = "#F7FE2E";
            final.can.fill();
            //Schokolade
            final.can.beginPath();
            final.can.arc(this.x + 50, this.y + 30, 12, 0, 2 * Math.PI);
            final.can.fillStyle = "#3B240B";
            final.can.fill();
        }
    }
    final.bild = bild;
})(final || (final = {}));
//# sourceMappingURL=bild.js.map
var endaufgabe;
(function (endaufgabe) {
    class Inhalt {
        constructor(_x, _y) {
            // this.x = _x + Math.random() * 800;
            // this.y = _y + Math.random() * 100;
            this.x = _x;
            this.y = _y;
        }
        draw() {
            endaufgabe.crc2.beginPath();
            endaufgabe.crc2.moveTo(65, 50);
            endaufgabe.crc2.lineTo(35, 50);
            endaufgabe.crc2.lineTo(50, 90);
            endaufgabe.crc2.closePath();
            endaufgabe.crc2.fillStyle = "#8A4B08";
            endaufgabe.crc2.fill();
            endaufgabe.crc2.beginPath();
            endaufgabe.crc2.moveTo(55, 50);
            endaufgabe.crc2.lineTo(80, 10);
            endaufgabe.crc2.strokeStyle = "#2E64FE";
            endaufgabe.crc2.stroke();
            endaufgabe.crc2.beginPath();
            endaufgabe.crc2.moveTo(80, 10);
            endaufgabe.crc2.lineTo(70, 10);
            endaufgabe.crc2.lineTo(85, 20);
            endaufgabe.crc2.closePath();
            endaufgabe.crc2.stroke();
            endaufgabe.crc2.fillStyle = "#2E64FE";
            endaufgabe.crc2.fill();
            endaufgabe.crc2.beginPath();
            endaufgabe.crc2.arc(80, 10, 2, 0, 2 * Math.PI);
            endaufgabe.crc2.fillStyle = "#2E64FE";
            endaufgabe.crc2.fill();
            endaufgabe.crc2.beginPath();
            endaufgabe.crc2.arc(40, 45, 12, 0, 2 * Math.PI);
            endaufgabe.crc2.fillStyle = "#FA5858";
            endaufgabe.crc2.fill();
            endaufgabe.crc2.beginPath();
            endaufgabe.crc2.arc(60, 45, 12, 0, 2 * Math.PI);
            endaufgabe.crc2.fillStyle = "#F7FE2E";
            endaufgabe.crc2.fill();
            endaufgabe.crc2.beginPath();
            endaufgabe.crc2.arc(50, 30, 12, 0, 2 * Math.PI);
            endaufgabe.crc2.fillStyle = "#3B240B";
            endaufgabe.crc2.fill();
        }
    }
    endaufgabe.Inhalt = Inhalt;
})(endaufgabe || (endaufgabe = {}));
//# sourceMappingURL=Inhalt.js.map
var final;
(function (final) {
    class bild {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        draw() {
            final.can.beginPath();
            final.can.moveTo(this.x + 65, this.y + 50);
            final.can.lineTo(this.x + 35, this.y + 50);
            final.can.lineTo(this.x + 50, this.y + 90);
            final.can.closePath();
            final.can.fillStyle = "#8A4B08";
            final.can.fill();
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
            final.can.beginPath();
            final.can.arc(this.x + 80, this.y + 10, 2, 0, 2 * Math.PI);
            final.can.fillStyle = "#2E64FE";
            final.can.fill();
            final.can.beginPath();
            final.can.arc(this.x + 40, this.y + 45, 12, 0, 2 * Math.PI);
            final.can.fillStyle = "#FA5858";
            final.can.fill();
            final.can.beginPath();
            final.can.arc(this.x + 60, this.y + 45, 12, 0, 2 * Math.PI);
            final.can.fillStyle = "#F7FE2E";
            final.can.fill();
            final.can.beginPath();
            final.can.arc(this.x + 50, this.y + 30, 12, 0, 2 * Math.PI);
            final.can.fillStyle = "#3B240B";
            final.can.fill();
        }
    }
    final.bild = bild;
})(final || (final = {}));
//# sourceMappingURL=bild.js.map
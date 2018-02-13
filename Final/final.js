var final;
(function (final) {
    window.addEventListener("load", createPicture);
    function createPicture() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        final.can = canvas.getContext("2d");
        console.log(final.can);
        final.can.fillStyle = "#E3CEF6";
        final.can.fillRect(0, 0, 150, 100);
        final.can.beginPath();
        final.can.moveTo(65, 50);
        final.can.lineTo(35, 50);
        final.can.lineTo(50, 90);
        final.can.closePath();
        final.can.fillStyle = "#8A4B08";
        final.can.fill();
        final.can.beginPath();
        final.can.moveTo(55, 50);
        final.can.lineTo(80, 10);
        final.can.strokeStyle = "#2E64FE";
        final.can.stroke();
        final.can.beginPath();
        final.can.moveTo(80, 10);
        final.can.lineTo(70, 10);
        final.can.lineTo(85, 20);
        final.can.closePath();
        final.can.stroke();
        final.can.fillStyle = "#2E64FE";
        final.can.fill();
        final.can.beginPath();
        final.can.arc(80, 10, 2, 0, 2 * Math.PI);
        final.can.fillStyle = "#2E64FE";
        final.can.fill();
        final.can.beginPath();
        final.can.arc(40, 45, 12, 0, 2 * Math.PI);
        final.can.fillStyle = "#FA5858";
        final.can.fill();
        final.can.beginPath();
        final.can.arc(60, 45, 12, 0, 2 * Math.PI);
        final.can.fillStyle = "#F7FE2E";
        final.can.fill();
        final.can.beginPath();
        final.can.arc(50, 30, 12, 0, 2 * Math.PI);
        final.can.fillStyle = "#3B240B";
        final.can.fill();
    }
})(final || (final = {}));
//# sourceMappingURL=final.js.map
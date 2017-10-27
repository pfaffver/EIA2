var L03;
(function (L03) {
    window.addEventListener("load", init);
    let crc2;
    let arrayX = [];
    let arrayY = [];
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        console.log("setTimeout");
        animate();
        for (let i = 0; i < 100; i++) {
            arrayX[i] = 200;
            arrayY[i] = 150;
        }
        // hier Hintergrund speichern
    }
    function animate() {
        console.log("Timeout");
        crc2.clearRect(0, 0, 400, 300); // hier Hintergrund restaurieren
        for (let i = 0; i < arrayX.length; i++) {
            arrayX[i] += Math.random() * 4 - 2; // hier experimentieren um
            arrayY[i] += Math.random() * 4 - 2; // andere Bewegungsmuster zu finden
            crc2.fillStyle = "#ff0000";
            crc2.fillRect(arrayX[i], arrayY[i], 20, 20);
        }
        window.setTimeout(animate, 20);
    }
})(L03 || (L03 = {}));
//# sourceMappingURL=DellOro.js.map
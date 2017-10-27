/* Aufgabe3
Name: Verena Pfaff
Matrikel: 256543
Datum: 27.10.2017 */
var aufgabe3;
(function (aufgabe3) {
    window.addEventListener("load", ski);
    let can;
    let arraySkiX = [390];
    let arraySkiY = [360];
    let Background;
    function ski() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        can = canvas.getContext("2d");
        console.log(can);
        can.fillStyle = "#5882FA";
        can.fillRect(0, 0, 800, 600);
        /*Berg*/
        drawMountain(120, 300);
        drawMountain(250, 270);
        drawMountain(450, 450);
        /*Sonne*/
        can.beginPath();
        can.arc(100, 70, 30, 0, 2 * Math.PI);
        can.fillStyle = "#F7FE2E";
        can.fill();
        /*Wolke*/
        drawCloud(600, 70);
        drawCloud(500, 30);
        /*Piste*/
        can.beginPath();
        can.moveTo(0, 100);
        can.lineTo(800, 400);
        can.lineTo(800, 600);
        can.lineTo(0, 600);
        can.closePath();
        can.stroke();
        can.fillStyle = "#EFF2FB";
        can.fill();
        /*Lift*/
        can.beginPath();
        can.moveTo(0, 150);
        can.lineTo(800, 450);
        can.stroke();
        /*Liftb�gel*/
        can.beginPath();
        can.moveTo(300, 263);
        can.lineTo(300, 300);
        can.stroke();
        /*Liftsitz*/
        can.beginPath();
        can.arc(300, 300, 10, 0, 1 * Math.PI);
        can.fillStyle = "#6E6E6E";
        can.fill();
        /*Baum*/
        drawTree(100, 500, "#0A2A0A");
        /*8 Dreiecke an zuf�lliger Position zwischen 150 und 600 horizontal und 500 und 550 vertikal*/
        for (let i = 0; i < 8; i++) {
            let x = 150 + Math.random() * 450;
            let y = 500 + Math.random() * 50;
            drawTree(x, y, "#0B6121");
        }
        /*50 Schneeflocken an zuf�lliger Position zwischen 0 und 800 horizontal und 0 und 600 vertikal (�ber das ganze Canvas)*/
        for (let i = 0; i < 50; i++) {
            let x = 0 + Math.random() * 800;
            let y = 0 + Math.random() * 600;
            drawSnow(x, y);
        }
        //Hintergrund speichern
        Background = can.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    function drawMountain(x, y) {
        //Berg
        can.beginPath();
        can.moveTo(x, y);
        can.lineTo(x + 200, y);
        can.lineTo(x + 100, y - 250);
        can.closePath();
        can.stroke();
        can.fillStyle = "#BDBDBD";
        can.fill();
    }
    function drawCloud(x, y) {
        //Wolke
        can.beginPath();
        can.arc(x, y, 10, 0, 2 * Math.PI);
        can.arc(x + 15, y + 8, 10, 0, 2 * Math.PI);
        can.arc(x, y + 10, 10, 0, 2 * Math.PI);
        can.arc(x - 15, y + 8, 10, 0, 2 * Math.PI);
        can.fillStyle = "#FAFAFA";
        can.fill();
    }
    function drawTree(x, y, color) {
        //Baum
        can.beginPath();
        can.moveTo(x, y);
        can.lineTo(x + 50, y);
        can.lineTo(x + 25, y - 50);
        can.closePath();
        can.stroke();
        can.fillStyle = color;
        can.fill();
        can.fillStyle = "#3B170B";
        can.fillRect(x + 17, y, 15, 10);
        can.beginPath();
    }
    function drawSnow(x, y) {
        //Schneeflocke
        can.beginPath();
        can.arc(x, y, 3, 0, 2 * Math.PI);
        can.fillStyle = "#E6E6E6";
        can.fill();
    }
    function drawSkier(x, y) {
        //Skifahrer
        can.beginPath();
        can.arc(x, y, 6, 0, 2 * Math.PI);
        can.fillStyle = "#B40431";
        can.fill();
        can.beginPath();
        can.arc(x, y, 6, 0, 1 * Math.PI);
        can.fillStyle = "#F5A9A9";
        can.fill();
        /*K�rper*/
        can.fillStyle = "#01DFA5";
        can.fillRect(x - 4, y + 6, 9, 16);
        /*Board*/
        can.beginPath();
        can.moveTo(x - 9, y + 19);
        can.lineTo(x - 9, y + 21);
        can.lineTo(x + 10, y + 28);
        can.lineTo(x + 10, y + 26);
        can.closePath();
        can.stroke();
        can.fillStyle = "#1C1C1C";
        can.fill();
    }
    function animate() {
        console.log("Timeout");
        can.putImageData(Background, 0, 0); // hier Hintergrund restaurieren
        for (let i = 0; i < arraySkiX.length; i++) {
            arraySkiX[i] += 1.7; //X-Wert und Y-Wert einer Skala
            arraySkiY[i] += 0.5;
            drawSkier(arraySkiX[i], arraySkiY[i]);
        }
        window.setTimeout(animate, 20);
    }
})(aufgabe3 || (aufgabe3 = {}));
//# sourceMappingURL=aufgabe3.js.map
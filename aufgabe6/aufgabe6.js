/* Aufgabe6
Name: Verena Pfaff
Matrikel: 256543
Datum: 22.11.2017 */
var aufgabe6;
(function (aufgabe6) {
    window.addEventListener("load", ski);
    let Background;
    let objects = [];
    function ski() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        aufgabe6.can = canvas.getContext("2d");
        console.log(aufgabe6.can);
        aufgabe6.can.fillStyle = "#5882FA";
        aufgabe6.can.fillRect(0, 0, 800, 600);
        /*Berg*/
        drawMountain(120, 300);
        drawMountain(250, 270);
        drawMountain(450, 450);
        /*Sonne*/
        aufgabe6.can.beginPath();
        aufgabe6.can.arc(100, 70, 30, 0, 2 * Math.PI);
        aufgabe6.can.fillStyle = "#F7FE2E";
        aufgabe6.can.fill();
        /*Piste*/
        aufgabe6.can.beginPath();
        aufgabe6.can.moveTo(0, 100);
        aufgabe6.can.lineTo(800, 400);
        aufgabe6.can.lineTo(800, 600);
        aufgabe6.can.lineTo(0, 600);
        aufgabe6.can.closePath();
        aufgabe6.can.stroke();
        aufgabe6.can.fillStyle = "#EFF2FB";
        aufgabe6.can.fill();
        /*Lift*/
        aufgabe6.can.beginPath();
        aufgabe6.can.moveTo(0, 150);
        aufgabe6.can.lineTo(800, 450);
        aufgabe6.can.stroke();
        /*Liftb�gel*/
        aufgabe6.can.beginPath();
        aufgabe6.can.moveTo(300, 263);
        aufgabe6.can.lineTo(300, 300);
        aufgabe6.can.stroke();
        /*Liftsitz*/
        aufgabe6.can.beginPath();
        aufgabe6.can.arc(300, 300, 10, 0, 1 * Math.PI);
        aufgabe6.can.fillStyle = "#6E6E6E";
        aufgabe6.can.fill();
        /*Baum*/
        drawTree(100, 500, "#0A2A0A");
        /*8 B�ume an zuf�lliger Position zwischen 150 und 600 horizontal und 500 und 550 vertikal*/
        for (let i = 0; i < 8; i++) {
            let x = 50 + Math.random() * 400;
            let y = 500 + Math.random() * 50;
            drawTree(x, y, "#0B6121");
        }
        /*Gibt New Snow() gibt Start und Bewegungswert an + For Schleife*/
        for (let i = 0; i < 250; i++) {
            let s = new aufgabe6.Snow(0, 0, 0, 1);
            objects.push(s);
        }
        /*Gibt New Cloud() gibt Start und Bewegungswert an + For Schleife*/
        for (let i = 0; i < 3; i++) {
            let c = new aufgabe6.Clouds(0, 3, 1, 0);
            objects.push(c);
        }
        /*Gibt New Skier() gibt Start und Bewegungswert an + For Schleife*/
        for (let i = 0; i < 4; i++) {
            let s = new aufgabe6.Skier(0, 210, 2.7, 0.8);
            s.setRandomStyle();
            objects.push(s);
        }
        //Hintergrund speichern
        Background = aufgabe6.can.getImageData(0, 0, canvas.width, canvas.height);
        //Aufruf der Animate Funktion
        animate();
    }
    function drawMountain(x, y) {
        //Berg
        aufgabe6.can.beginPath();
        aufgabe6.can.moveTo(x, y);
        aufgabe6.can.lineTo(x + 200, y);
        aufgabe6.can.lineTo(x + 100, y - 250);
        aufgabe6.can.closePath();
        aufgabe6.can.stroke();
        aufgabe6.can.fillStyle = "#BDBDBD";
        aufgabe6.can.fill();
    }
    function drawTree(x, y, color) {
        //Baum
        aufgabe6.can.beginPath();
        aufgabe6.can.moveTo(x, y);
        aufgabe6.can.lineTo(x + 50, y);
        aufgabe6.can.lineTo(x + 25, y - 50);
        aufgabe6.can.closePath();
        aufgabe6.can.stroke();
        aufgabe6.can.fillStyle = color;
        aufgabe6.can.fill();
        aufgabe6.can.fillStyle = "#3B170B";
        aufgabe6.can.fillRect(x + 17, y, 15, 10);
        aufgabe6.can.beginPath();
    }
    //        fahrer = new Skier(0, 210, 2.7, 0.8); - F�r Einzelner Ski fahrer
    //        fahrer.setRandomStyle(); - F�r Einzelner Ski fahrer
    //        fahrer.SetSkierToCanvasStartAgain(); - F�r Einzelner Ski fahrer
    function animate() {
        console.log("Timeout");
        aufgabe6.can.putImageData(Background, 0, 0); // hier Hintergrund restaurieren
        //Hier geht es darum, was passiert, wenn der SKifahrer den Rand vom Canvas erreicht hat.
        //Die For-Schleife l�sst jede Stelle des Arrays durchlaufen (Length)
        for (let i = 0; i < aufgabe6.MovingObjects.length; i++) {
            let s = objects[i];
            s.update();
        }
        window.setTimeout(animate, 15);
    }
})(aufgabe6 || (aufgabe6 = {}));
//# sourceMappingURL=aufgabe6.js.map
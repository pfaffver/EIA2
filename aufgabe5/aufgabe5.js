/* Aufgabe5
Name: Verena Pfaff
Matrikel: 256543
Datum: 16.11.2017 */
var aufgabe5;
(function (aufgabe5) {
    window.addEventListener("load", ski);
    let Background;
    let SnowArray = [];
    let CloudArray = [];
    let SkierArray = [];
    //let fahrer: Skier; - Das Beispiel w�re f�r einen einzelnen Skifahrer
    function ski() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        aufgabe5.can = canvas.getContext("2d");
        console.log(aufgabe5.can);
        aufgabe5.can.fillStyle = "#5882FA";
        aufgabe5.can.fillRect(0, 0, 800, 600);
        /*Berg*/
        drawMountain(120, 300);
        drawMountain(250, 270);
        drawMountain(450, 450);
        /*Sonne*/
        aufgabe5.can.beginPath();
        aufgabe5.can.arc(100, 70, 30, 0, 2 * Math.PI);
        aufgabe5.can.fillStyle = "#F7FE2E";
        aufgabe5.can.fill();
        /*Piste*/
        aufgabe5.can.beginPath();
        aufgabe5.can.moveTo(0, 100);
        aufgabe5.can.lineTo(800, 400);
        aufgabe5.can.lineTo(800, 600);
        aufgabe5.can.lineTo(0, 600);
        aufgabe5.can.closePath();
        aufgabe5.can.stroke();
        aufgabe5.can.fillStyle = "#EFF2FB";
        aufgabe5.can.fill();
        /*Lift*/
        aufgabe5.can.beginPath();
        aufgabe5.can.moveTo(0, 150);
        aufgabe5.can.lineTo(800, 450);
        aufgabe5.can.stroke();
        /*Liftb�gel*/
        aufgabe5.can.beginPath();
        aufgabe5.can.moveTo(300, 263);
        aufgabe5.can.lineTo(300, 300);
        aufgabe5.can.stroke();
        /*Liftsitz*/
        aufgabe5.can.beginPath();
        aufgabe5.can.arc(300, 300, 10, 0, 1 * Math.PI);
        aufgabe5.can.fillStyle = "#6E6E6E";
        aufgabe5.can.fill();
        /*Baum*/
        drawTree(100, 500, "#0A2A0A");
        /*8 B�ume an zuf�lliger Position zwischen 150 und 600 horizontal und 500 und 550 vertikal*/
        for (let i = 0; i < 8; i++) {
            let x = 50 + Math.random() * 400;
            let y = 500 + Math.random() * 50;
            drawTree(x, y, "#0B6121");
        }
        /*Gibt Start und Bewegungswert an das Interface Snow + For Schleife*/
        for (let i = 0; i < 50; i++) {
            SnowArray[i] = {
                x: 800 * Math.random(),
                y: 600 * Math.random(),
                dx: 0,
                dy: 1
            };
        }
        /*Gibt New Cloud() gibt Start und Bewegungswert an + For Schleife*/
        for (let i = 0; i < 3; i++) {
            let c = new aufgabe5.Clouds(0, 3, 1, 0);
            CloudArray[i] = c;
        }
        /*Gibt New Skier() gibt Start und Bewegungswert an + For Schleife*/
        for (let i = 0; i < 4; i++) {
            let s = new aufgabe5.Skier(0, 210, 2.7, 0.8);
            s.setRandomStyle();
            SkierArray[i] = s;
        }
        //Hintergrund speichern
        Background = aufgabe5.can.getImageData(0, 0, canvas.width, canvas.height);
        //Aufruf der Animate Funktion
        animate();
    }
    function drawMountain(x, y) {
        //Berg
        aufgabe5.can.beginPath();
        aufgabe5.can.moveTo(x, y);
        aufgabe5.can.lineTo(x + 200, y);
        aufgabe5.can.lineTo(x + 100, y - 250);
        aufgabe5.can.closePath();
        aufgabe5.can.stroke();
        aufgabe5.can.fillStyle = "#BDBDBD";
        aufgabe5.can.fill();
    }
    function drawTree(x, y, color) {
        //Baum
        aufgabe5.can.beginPath();
        aufgabe5.can.moveTo(x, y);
        aufgabe5.can.lineTo(x + 50, y);
        aufgabe5.can.lineTo(x + 25, y - 50);
        aufgabe5.can.closePath();
        aufgabe5.can.stroke();
        aufgabe5.can.fillStyle = color;
        aufgabe5.can.fill();
        aufgabe5.can.fillStyle = "#3B170B";
        aufgabe5.can.fillRect(x + 17, y, 15, 10);
        aufgabe5.can.beginPath();
    }
    function moveAndDrawSnow(_snow) {
        //Schneeflocke bewegen
        _snow.y += _snow.dy;
        //Schneeflocke erstellen
        aufgabe5.can.beginPath();
        aufgabe5.can.arc(_snow.x, _snow.y, 3, 0, 2 * Math.PI);
        aufgabe5.can.fillStyle = "#E6E6E6";
        aufgabe5.can.fill();
    }
    //        fahrer = new Skier(0, 210, 2.7, 0.8); - F�r Einzelner Ski fahrer
    //        fahrer.setRandomStyle(); - F�r Einzelner Ski fahrer
    //        fahrer.SetSkierToCanvasStartAgain(); - F�r Einzelner Ski fahrer
    function animate() {
        console.log("Timeout");
        aufgabe5.can.putImageData(Background, 0, 0); // hier Hintergrund restaurieren
        //Hier geht es darum, was passiert, wenn der SKifahrer den Rand vom Canvas erreicht hat.
        //Die For-Schleife l�sst jede Stelle des Arrays durchlaufen (Length)
        for (let i = 0; i < SkierArray.length; i++) {
            let s = SkierArray[i];
            s.update();
            s.SetSkierToCanvasStartAgain();
        }
        for (let i = 0; i < CloudArray.length; i++) {
            let s = CloudArray[i];
            s.update();
            s.SetCloudsToCanvasStartAgain();
        }
        for (let i = 0; i < SnowArray.length; i++) {
            if (SnowArray[i].y > 600) {
                SnowArray[i].y = 0;
            }
            moveAndDrawSnow(SnowArray[i]);
        }
        window.setTimeout(animate, 15);
    }
})(aufgabe5 || (aufgabe5 = {}));
//# sourceMappingURL=aufgabe5.js.map
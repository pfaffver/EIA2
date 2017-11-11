/* Aufgabe4 
Name: Verena Pfaff 
Matrikel: 256543
Datum: 09.11.2017 */

namespace aufgabe4 {

    window.addEventListener("load", ski);

    let can: CanvasRenderingContext2D;

    interface Snow {
        x: number;
        y: number;
        dx: number;
        dy: number;
    }

    interface Cloud {
        x: number;
        y: number;
        dx: number;
        dy: number;
    }

    interface Skier {
        x: number;
        y: number;
        dx: number;
        dy: number;
        colorHat: string;
        colorBody: string;
    }

    let Background: ImageData;
    let SnowArray: Snow[] = [];
    let CloudArray: Cloud[] = [];
    let SkierArray: Skier[] = [];


    function ski(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
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

        /*Liftbügel*/
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

        /*8 Dreiecke an zufälliger Position zwischen 150 und 600 horizontal und 500 und 550 vertikal*/
        for (let i: number = 0; i < 8; i++) {
            let x: number = 150 + Math.random() * 450;
            let y: number = 500 + Math.random() * 50;
            drawTree(x, y, "#0B6121");
        }

        /*Gibt Start und Bewegungswert an das Interface Snow + For Schleife*/
        for (let i: number = 0; i < 50; i++) {
            SnowArray[i] = {
                x: 800 * Math.random(),
                y: 600 * Math.random(),
                dx: 0,
                dy: 1
            };
        }

        /*Gibt Start und Bewegungswert an das Interface Cloud + For Schleife*/
        for (let i: number = 0; i < 3; i++) {
            CloudArray[i] = {
                x: 800 * Math.random(),
                y: 150 * Math.random(),
                dx: 1,
                dy: 0
            };
        }

        /*Gibt Start und Bewegungswert an das Interface Skier + For Schleife*/
        for (let i: number = 0; i < 4; i++) {
            SkierArray[i] = {
                x: 0 + Math.random() * 100,
                y: 210 + Math.random() * 100,
                dx: 2.7,
                dy: 0.8,
                colorHat: "hsl(" + Math.random() * 360 + ", 100%, 50%)",
                colorBody: "hsl(" + Math.random() * 360 + ", 100%, 50%)",
            };
        }


        //Hintergrund speichern
        Background = can.getImageData(0, 0, canvas.width, canvas.height);

        //Aufruf der Animate Funktion
        animate();
    }

    function drawMountain(x: number, y: number): void {
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

    function drawTree(x: number, y: number, color: string): void {
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

    function moveAndDrawCloud(_cloud: Cloud): void {
        //Wolke bewegen
        _cloud.x += _cloud.dx;

        //Wolke zeichnen
        can.beginPath();
        can.arc(_cloud.x, _cloud.y, 10, 0, 2 * Math.PI);
        can.arc(_cloud.x + 15, _cloud.y + 8, 10, 0, 2 * Math.PI);
        can.arc(_cloud.x, _cloud.y + 10, 10, 0, 2 * Math.PI);
        can.arc(_cloud.x - 15, _cloud.y + 8, 10, 0, 2 * Math.PI);
        can.fillStyle = "#FAFAFA";
        can.fill();
    }

    function moveAndDrawSnow(_snow: Snow): void {
        //Schneeflocke bewegen
        _snow.y += _snow.dy;

        //Schneeflocke erstellen
        can.beginPath();
        can.arc(_snow.x, _snow.y, 3, 0, 2 * Math.PI);
        can.fillStyle = "#E6E6E6";
        can.fill();
    }

    function moveAndDrawSkier(_skier: Skier): void {
        //Skifahrer bewegen
        _skier.y += _skier.dy;
        _skier.x += _skier.dx;

        //Skifahrer
        can.beginPath();
        can.arc(_skier.x, _skier.y, 6, 0, 2 * Math.PI);
        can.fillStyle = _skier.colorHat;
        can.fill();
        can.beginPath();
        can.arc(_skier.x, _skier.y, 6, 0, 1 * Math.PI);
        can.fillStyle = "#F5A9A9";
        can.fill();
        /*Körper*/
        can.fillStyle = _skier.colorBody;
        can.fillRect(_skier.x - 4, _skier.y + 6, 9, 16);
        /*Board*/
        can.beginPath();
        can.moveTo(_skier.x - 9, _skier.y + 19);
        can.lineTo(_skier.x - 9, _skier.y + 21);
        can.lineTo(_skier.x + 10, _skier.y + 28);
        can.lineTo(_skier.x + 10, _skier.y + 26);
        can.closePath();
        can.stroke();
        can.fillStyle = "#1C1C1C";
        can.fill();
    }

    function animate(): void {

        console.log("Timeout");
        can.putImageData(Background, 0, 0); // hier Hintergrund restaurieren
        //Hier geht es darum, was passiert, wenn der SKifahrer den Rand vom Canvas erreicht hat.
        //Die For-Schleife lässt jede Stelle des Arrays durchlaufen (Length)
        for (let i: number = 0; i < SkierArray.length; i++) {
            if (SkierArray[i].x > 800) {
                SkierArray[i].x = 0;
                SkierArray[i].y = 240 + Math.random() * 50;
            }
            moveAndDrawSkier(SkierArray[i]);
        }

        for (let i: number = 0; i < SnowArray.length; i++) {
            if (SnowArray[i].y > 600) {
                SnowArray[i].y = 0;
            }
            moveAndDrawSnow(SnowArray[i]);
        }

        for (let i: number = 0; i < CloudArray.length; i++) {
            if (CloudArray[i].x > 800) {
                CloudArray[i].x = 0;
            }
            moveAndDrawCloud(CloudArray[i]);
        }

        window.setTimeout(animate, 15);
    }
}
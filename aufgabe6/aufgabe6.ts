/* Aufgabe6
Name: Verena Pfaff 
Matrikel: 256543
Datum: 22.11.2017 */

namespace aufgabe6 {

    window.addEventListener("load", ski);

    export let can: CanvasRenderingContext2D;

    let Background: ImageData;
    let objects: MovingObjects[] = [];

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

        /*8 Bäume an zufälliger Position zwischen 150 und 600 horizontal und 500 und 550 vertikal*/
        for (let i: number = 0; i < 8; i++) {
            let x: number = 50 + Math.random() * 400;
            let y: number = 500 + Math.random() * 50;
            drawTree(x, y, "#0B6121");
        }

        /*Gibt New Snow() gibt Start und Bewegungswert an + For Schleife*/
        for (let i: number = 0; i < 250; i++) {
            let s: Snow = new Snow(0, 0, 0, 1);
            objects.push(s);
        }

        /*Gibt New Cloud() gibt Start und Bewegungswert an + For Schleife*/
        for (let i: number = 0; i < 3; i++) {
            let c: Clouds = new Clouds(0, 3, 1, 0);
            objects.push(c);
        }

        /*Gibt New Skier() gibt Start und Bewegungswert an + For Schleife*/
        for (let i: number = 0; i < 4; i++) {
            let s: Skier = new Skier(0, 210, 2.7, 0.8);
            s.setRandomStyle();
            objects.push(s);
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

    //        fahrer = new Skier(0, 210, 2.7, 0.8); - Für Einzelner Ski fahrer
    //        fahrer.setRandomStyle(); - Für Einzelner Ski fahrer
    //        fahrer.SetSkierToCanvasStartAgain(); - Für Einzelner Ski fahrer

    function animate(): void {

        console.log("Timeout");
        can.putImageData(Background, 0, 0); // hier Hintergrund restaurieren
        //Hier geht es darum, was passiert, wenn der SKifahrer den Rand vom Canvas erreicht hat.
        //Die For-Schleife lässt jede Stelle des Arrays durchlaufen (Length)

        for (let i: number = 0; i < MovingObjects.length; i++) {
            let s: MovingObjects = objects[i];
            s.update();
        }

        window.setTimeout(animate, 15);
    }
}
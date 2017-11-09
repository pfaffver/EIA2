/* Aufgabe4 
Name: Verena Pfaff 
Matrikel: 256543
Datum: 09.11.2017 */

namespace aufgabe4 {

    window.addEventListener("load", ski);

    let can: CanvasRenderingContext2D;

    let arraySkiX: number[] = [0, -30]; //Array für den (1) Skifahrer
    let arraySkiY: number[] = [240, 260];

    let arraySnowX: number[] = []; //Array für die Schneeflocken
    let arraySnowY: number[] = [];

    let arrayCloudX: number[] = []; //Array für die Wolken
    let arrayCloudY: number[] = [];

    let Background: ImageData;


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

        /*Wolke
        drawCloud(600, 70);
        drawCloud(500, 30);*/

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

        //Hintergrund speichern
        Background = can.getImageData(0, 0, canvas.width, canvas.height);

        animate();

        for (let i: number = 0; i < 50; i++) {
            arraySnowX[i] = 800 * Math.random();
            arraySnowY[i] = 600 * Math.random();
        }

        for (let i: number = 0; i < 3; i++) {
            arrayCloudX[i] = 800 * Math.random();
            arrayCloudY[i] = 100 * Math.random();
        }
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

    function drawCloud(x: number, y: number): void {
        //Wolke
        can.beginPath();
        can.arc(x, y, 10, 0, 2 * Math.PI);
        can.arc(x + 15, y + 8, 10, 0, 2 * Math.PI);
        can.arc(x, y + 10, 10, 0, 2 * Math.PI);
        can.arc(x - 15, y + 8, 10, 0, 2 * Math.PI);
        can.fillStyle = "#FAFAFA";
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

    function drawSnow(x: number, y: number): void {
        //Schneeflocke
        can.beginPath();
        can.arc(x, y, 3, 0, 2 * Math.PI);
        can.fillStyle = "#E6E6E6";
        can.fill();
    }

    function drawSkier(x: number, y: number): void {
        //Skifahrer
        can.beginPath();
        can.arc(x, y, 6, 0, 2 * Math.PI);
        can.fillStyle = "#B40431";
        can.fill();
        can.beginPath();
        can.arc(x, y, 6, 0, 1 * Math.PI);
        can.fillStyle = "#F5A9A9";
        can.fill();
        /*Körper*/
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

    function animate(): void {
        console.log("Timeout");
        can.putImageData(Background, 0, 0); // hier Hintergrund restaurieren
        for (let i: number = 0; i < arraySkiX.length; i++) { //Hier ist es egal ob das Y oder X array geholt wird
            if (arraySkiX[i] > 800) {
                arraySkiX[i] = 0;
                arraySkiY[i] = 240 + Math.random() * 50;
            }
            arraySkiX[i] += 2.7; //X-Wert und Y-Wert einer Skala
            arraySkiY[i] += 0.8;
            drawSkier(arraySkiX[i], arraySkiY[i]);
        }

        for (let i: number = 0; i < arraySnowY.length; i++) {
            if (arraySnowY[i] > 600) {
                arraySnowY[i] = 0;
            }
            arraySnowY[i] += 1;
            drawSnow(arraySnowX[i], arraySnowY[i]);
        }

        for (let i: number = 0; i < arrayCloudX.length; i++) {
            if (arrayCloudX[i] > 800) {
                arrayCloudX[i] = 0;
            }
            arrayCloudX[i] += 1;
            drawCloud(arrayCloudX[i], arrayCloudY[i]);
        }

        window.setTimeout(animate, 15);
    }

}
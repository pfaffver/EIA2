/* endaufgabe
Name: Verena Pfaff 
Matrikel: 256543
Datum: 12.02.2018 */

namespace endaufgabe {

    export let crc2: CanvasRenderingContext2D;
    let s: Inhalt;
    window.addEventListener("load", fehlersuche);



    function fehlersuche(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        let crc2 = canvas.getContext("2d");

        s = new Inhalt(0, 0);
        s.draw(crc2);
        draw();

    }
    
    function draw(): void {
    }
}
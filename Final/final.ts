/* Endaufgabe
Name: Verena Pfaff 
Matrikel: 256543
Datum: 13.02.2018 */

namespace final {

    window.addEventListener("load", createPicture);

    export let can: CanvasRenderingContext2D;
    let Inhalt: bild[] = [];
    let InhaltFehler: bildFehler;
    let fehlerText: string[] = ["Leider Falsch", "So schwer ist es doch nicht...", "Hast du was an den Augen?"];
    let textAus: number = 0;
    let random: number = Math.round(Math.random() * 33);
    function createPicture(): void {

        for (let i: number = 0; i < 33; i++) {
            if (random != i) {
                let inhalt: HTMLDivElement = <HTMLDivElement>document.getElementById("content");
                let b: HTMLCanvasElement = document.createElement("canvas");
                b.width = 100;
                b.height = 100;
                b.addEventListener("click", falsch);
                document.body.appendChild(b);
            }

            else {
                let inhalt: HTMLDivElement = <HTMLDivElement>document.getElementById("content");
                let b: HTMLCanvasElement = document.createElement("canvas");
                b.width = 100;
                b.height = 100;
                b.addEventListener("click", richtig);
                document.body.appendChild(b);
            }
//            let b: HTMLElement;
//            if (i == 9 || i == 19) {
//                var w = window.innerWidth;
//                if (w > 570) {
//               // let inhalt: HTMLDivElement = <HTMLDivElement>document.getElementById("content");
//                b = document.createElement("p");
//
//                document.body.appendChild(b);
//                } else {
//                 document.body.removeChild(b);
//                    
//                    
//                }    
//            }
        }

        for (let i: number = 0; i < 33; i++) {
            if (random != i) {
                let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[i];
                can = canvas.getContext("2d");
                console.log(canvas);
                Inhalt[i] = new bild(0, 0,"#FA5858");
                Inhalt[i].draw();
            }
        }

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[random];

        can = canvas.getContext("2d");
        console.log(can);

        InhaltFehler = new bildFehler(0, 0, "#FF0000");
        InhaltFehler.draw();
    }

    function falsch(): void {
        if (textAus < 3) {
            alert(fehlerText[textAus]);
            textAus++;
        }

        else {
            alert("Es ist das " + (random + 1) + " Bild");
        }
    }

    function richtig(): void {
        alert("RICHTIG - Du hast das Fehlerbild entdeckt");
    }
}
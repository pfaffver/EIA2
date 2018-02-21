/* Endaufgabe
Name: Verena Pfaff 
Matrikel: 256543
Datum: 13.02.2018 */

namespace final {

    window.addEventListener("load", createPicture);
    let clickCounter: number = 0;

    export let can: CanvasRenderingContext2D;
    let Inhalt: bild[] = [];
    let InhaltFehler: bildFehler;
    let fehlerText: string[] = ["Leider Falsch", "So schwer ist es doch nicht...", "Hast du was an den Augen?"];
    let textAus: number = 0;
    let random: number = Math.round(Math.random() * 32);

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
        }

        for (let i: number = 0; i < 33; i++) {
            if (random != i) {
                let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[i];
                can = canvas.getContext("2d");
                console.log(canvas);
                Inhalt[i] = new bild(0, 0, "#FA5858");
                Inhalt[i].draw();
            }
        }

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[random];

        can = canvas.getContext("2d");
        console.log(can);

        InhaltFehler = new bildFehler(0, 0, "#FE2E2E");
        InhaltFehler.draw();
    }

    function falsch(): void {
        clickCounter = clickCounter + 1;
        if (textAus < 3) {
            let tonFalse: HTMLMediaElement = <HTMLMediaElement>document.getElementById("plop");
            tonFalse.play();
            
            alert(fehlerText[textAus]);
            textAus++;
        }

        else {
            alert("Es ist das " + (random + 1) + " Bild - Die Erdbeerkugel hat eine andere Farbe");
        }
    }

    function richtig(): void {
        clickCounter = clickCounter + 1;

        for (let i: number = 0; i < document.getElementsByTagName("canvas").length; i++) {

            let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[i];
            can = canvas.getContext("2d");
            can.clearRect(0, 0, 100, 100);

            canvas.removeEventListener("click", richtig);
            canvas.removeEventListener("click", falsch);
        }

        let b: HTMLDivElement = document.createElement("div");
        b.id = "schluss";
        b.innerText = "Sehr Gut! Du hast das gesuchte Bild gefunden und dabei " + clickCounter + " Versuch(e) gebraucht";
        document.body.appendChild(b);

        let a: HTMLImageElement = document.createElement("img");
        a.src = "congrats.gif";
        a.id = "congrats";
        document.body.appendChild(a);

        let tonCelebration: HTMLMediaElement = <HTMLMediaElement>document.getElementById("gold");
        tonCelebration.play();
    }
}
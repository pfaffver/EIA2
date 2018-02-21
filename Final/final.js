/* Endaufgabe
Name: Verena Pfaff
Matrikel: 256543
Datum: 13.02.2018 */
var final;
(function (final) {
    window.addEventListener("load", createPicture);
    let clickCounter = 0;
    let Inhalt = [];
    let InhaltFehler;
    let fehlerText = ["Leider Falsch", "So schwer ist es doch nicht...", "Hast du was an den Augen?"];
    let textAus = 0;
    let random = Math.round(Math.random() * 32);
    function createPicture() {
        for (let i = 0; i < 33; i++) {
            if (random != i) {
                let inhalt = document.getElementById("content");
                let b = document.createElement("canvas");
                b.width = 100;
                b.height = 100;
                b.addEventListener("click", falsch);
                document.body.appendChild(b);
            }
            else {
                let inhalt = document.getElementById("content");
                let b = document.createElement("canvas");
                b.width = 100;
                b.height = 100;
                b.addEventListener("click", richtig);
                document.body.appendChild(b);
            }
        }
        for (let i = 0; i < 33; i++) {
            if (random != i) {
                let canvas = document.getElementsByTagName("canvas")[i];
                final.can = canvas.getContext("2d");
                console.log(canvas);
                Inhalt[i] = new final.bild(0, 0, "#FA5858");
                Inhalt[i].draw();
            }
        }
        let canvas = document.getElementsByTagName("canvas")[random];
        final.can = canvas.getContext("2d");
        console.log(final.can);
        InhaltFehler = new final.bildFehler(0, 0, "#FE2E2E");
        InhaltFehler.draw();
    }
    function falsch() {
        clickCounter = clickCounter + 1;
        if (textAus < 3) {
            let tonFalse = document.getElementById("plop");
            tonFalse.play();
            alert(fehlerText[textAus]);
            textAus++;
        }
        else {
            alert("Es ist das " + (random + 1) + " Bild - Die Erdbeerkugel hat eine andere Farbe");
        }
    }
    function richtig() {
        clickCounter = clickCounter + 1;
        for (let i = 0; i < document.getElementsByTagName("canvas").length; i++) {
            let canvas = document.getElementsByTagName("canvas")[i];
            final.can = canvas.getContext("2d");
            final.can.clearRect(0, 0, 100, 100);
            canvas.removeEventListener("click", richtig);
            canvas.removeEventListener("click", falsch);
        }
        let b = document.createElement("div");
        b.id = "schluss";
        b.innerText = "Sehr Gut! Du hast das gesuchte Bild gefunden und dabei " + clickCounter + " Versuch(e) gebraucht";
        document.body.appendChild(b);
        let a = document.createElement("img");
        a.src = "congrats.gif";
        a.id = "congrats";
        document.body.appendChild(a);
        let tonCelebration = document.getElementById("gold");
        tonCelebration.play();
    }
})(final || (final = {}));
//# sourceMappingURL=final.js.map
/* Endaufgabe
Name: Verena Pfaff
Matrikel: 256543
Datum: 23.02.2018 */
var final;
(function (final) {
    window.addEventListener("load", createPicture);
    let clickCounter = 0;
    let Inhalt = [];
    let bilder = 5;
    let fehlerText = ["Leider Falsch", "So schwer ist es doch nicht...", "Hast du was an den Augen?"];
    let textAus = 0;
    let random;
    function createPicture() {
        random = Math.round(Math.random() * bilder);
        for (let i = 0; i < bilder + 1; i++) {
            if (random != i) {
                let inhalt = document.getElementById("content");
                let b = document.createElement("canvas");
                b.width = 100;
                b.height = 100;
                b.id = "canvas" + i;
                b.addEventListener("click", falsch);
                document.body.appendChild(b);
            }
            else {
                let inhalt = document.getElementById("content");
                let b = document.createElement("canvas");
                b.width = 100;
                b.height = 100;
                b.id = "canvas" + i;
                b.addEventListener("click", richtig);
                document.body.appendChild(b);
            }
        }
        for (let i = 0; i < bilder + 1; i++) {
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
        Inhalt[random] = new final.bild(0, 0, "#FE2E2E");
        Inhalt[random].draw();
    }
    function falsch() {
        clickCounter = clickCounter + 1;
        let tonFalse = document.getElementById("plop");
        tonFalse.play();
        if (textAus < 3) {
            alert(fehlerText[textAus]);
            textAus++;
        }
        else {
            alert("Es ist das " + (random + 1) + " Bild - Die Erdbeerkugel hat eine andere Farbe");
        }
    }
    function richtig() {
        clickCounter = clickCounter + 1;
        for (let i = 0; i < bilder + 1; i++) {
            document.getElementById("canvas" + i).parentElement.removeChild(document.getElementById("canvas" + i));
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
        let c = document.createElement("button");
        c.innerText = "Nächstes Level";
        c.id = "nl";
        c.addEventListener("click", nlAufruf);
        document.body.appendChild(c);
    }
    function nlAufruf() {
        document.getElementById("schluss").parentNode.removeChild(document.getElementById("schluss"));
        document.getElementById("congrats").parentNode.removeChild(document.getElementById("congrats"));
        document.getElementById("nl").parentNode.removeChild(document.getElementById("nl"));
        bilder += 2;
        createPicture();
        clickCounter = 0;
    }
})(final || (final = {}));
//# sourceMappingURL=final.js.map
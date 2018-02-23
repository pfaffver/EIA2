/* Endaufgabe
Name: Verena Pfaff
Matrikel: 256543
Datum: 13.02.2018 */
var final;
(function (final) {
    window.addEventListener("load", createPicture);
    var clickCounter = 0;
    var Inhalt = [];
    var InhaltFehler;
    var bilder = 3;
    var fehlerText = ["Leider Falsch", "So schwer ist es doch nicht...", "Hast du was an den Augen?"];
    var textAus = 0;
    var random = Math.round(Math.random() * bilder);
    function createPicture() {
        for (var i = 0; i < bilder + 1; i++) {
            if (random != i) {
                var inhalt = document.getElementById("content");
                var b = document.createElement("canvas");
                b.width = 100;
                b.height = 100;
                b.id = "canvas" + i;
                b.addEventListener("click", falsch);
                document.body.appendChild(b);
            }
            else {
                var inhalt = document.getElementById("content");
                var b = document.createElement("canvas");
                b.width = 100;
                b.height = 100;
                b.id = "canvas" + i;
                b.addEventListener("click", richtig);
                document.body.appendChild(b);
            }
        }
        for (var i = 0; i < bilder + 1; i++) {
            if (random != i) {
                var canvas_1 = document.getElementsByTagName("canvas")[i];
                final.can = canvas_1.getContext("2d");
                console.log(canvas_1);
                Inhalt[i] = new final.bild(0, 0, "#FA5858");
                Inhalt[i].draw();
            }
        }
        var canvas = document.getElementsByTagName("canvas")[random];
        final.can = canvas.getContext("2d");
        console.log(final.can);
        InhaltFehler = new final.bildFehler(0, 0, "#FE2E2E");
        InhaltFehler.draw();
    }
    function falsch() {
        clickCounter = clickCounter + 1;
        var tonFalse = document.getElementById("plop");
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
        for (var i = 0; i < bilder + 1; i++) {
            document.getElementById("canvas" + i).parentElement.removeChild(document.getElementById("canvas" + i));
        }
        var b = document.createElement("div");
        b.id = "schluss";
        b.innerText = "Sehr Gut! Du hast das gesuchte Bild gefunden und dabei " + clickCounter + " Versuch(e) gebraucht";
        document.body.appendChild(b);
        var a = document.createElement("img");
        a.src = "congrats.gif";
        a.id = "congrats";
        document.body.appendChild(a);
        var tonCelebration = document.getElementById("gold");
        tonCelebration.play();
        var c = document.createElement("button");
        c.innerText = "Nächstes Level";
        c.id = "nl";
        c.style.marginLeft = "30%";
        c.style.width = "40%";
        c.style.backgroundColor = "pink";
        c.addEventListener("click", nlAufruf);
        document.body.appendChild(c);
    }
    function nlAufruf() {
        document.getElementById("schluss").parentNode.removeChild(document.getElementById("schluss"));
        document.getElementById("congrats").parentNode.removeChild(document.getElementById("congrats"));
        document.getElementById("nl").parentNode.removeChild(document.getElementById("nl"));
        bilder += 2;
        createPicture();
    }
})(final || (final = {}));
//# sourceMappingURL=final.js.map
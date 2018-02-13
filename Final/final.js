var final;
(function (final) {
    window.addEventListener("load", createPicture);
    let Inhalt = [];
    let InhaltFehler;
    let fehlerText = ["Leider Falsch", "Hast du was an den Augen?", "So schwer ist es doch nicht..."];
    let textAus = 0;
    let random = Math.round(Math.random() * 33);
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
                Inhalt[i] = new final.bild(0, 0);
                Inhalt[i].draw();
            }
        }
        let canvas = document.getElementsByTagName("canvas")[random];
        final.can = canvas.getContext("2d");
        console.log(final.can);
        InhaltFehler = new final.bildFehler(0, 0);
        InhaltFehler.draw();
    }
    function falsch() {
        if (textAus < 3) {
            alert(fehlerText[textAus]);
            textAus++;
        }
        else {
            alert("Es ist das " + (random + 1) + " Bild");
        }
    }
    function richtig() {
        alert("RICHTIG - Du hast das Fehlerbild entdeckt");
    }
})(final || (final = {}));
//# sourceMappingURL=final.js.map
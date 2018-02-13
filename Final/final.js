var final;
(function (final) {
    window.addEventListener("load", createPicture);
    let Inhalt = [];
    let InhaltFehler;
    let random = Math.round(Math.random() * 10);
    function createPicture() {
        for (let i = 0; i < 10; i++) {
            if (random != i) {
                let inhalt = document.getElementById("content");
                let b = document.createElement("canvas");
                b.width = 100;
                b.height = 100;
                b.addEventListener("click", falsch);
                document.body.appendChild(b);
            }
            else if (random != i) {
                let inhalt = document.getElementById("content");
                let h = document.createElement("canvas");
                h.width = 100;
                h.height = 100;
                h.addEventListener("click", falschAgain);
                document.body.appendChild(h);
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
        for (let i = 0; i < 10; i++) {
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
        alert("Leider falsch - Das ist nicht das gesuchte Fehlerbild");
    }
    function falschAgain() {
        alert("Wieder FALSCH - Hast du was an den Augen?");
    }
    function richtig() {
        alert("RICHTIG - Du hast das Fehlerbild entdeckt");
    }
})(final || (final = {}));
//# sourceMappingURL=final.js.map
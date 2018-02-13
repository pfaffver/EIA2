var final;
(function (final) {
    window.addEventListener("load", createPicture);
    let Inhalt;
    let InhaltFehler;
    function createPicture() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        final.can = canvas.getContext("2d");
        console.log(final.can);
        Inhalt = new final.bild(0, 0);
        Inhalt.draw();
        let canvas2 = document.getElementsByTagName("canvas")[1];
        console.log(canvas);
        final.can = canvas2.getContext("2d");
        console.log(final.can);
        InhaltFehler = new final.bildFehler(0, 0);
        InhaltFehler.draw();
    }
})(final || (final = {}));
//# sourceMappingURL=final.js.map
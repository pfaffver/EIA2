var final;
(function (final) {
    window.addEventListener("load", createPicture);
    let Inhalt;
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
        Inhalt = new final.bild(0, 0);
        Inhalt.draw();
    }
})(final || (final = {}));
//# sourceMappingURL=final.js.map
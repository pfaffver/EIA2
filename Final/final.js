var final;
(function (final) {
    window.addEventListener("load", createPicture);
    let Inhalt;
    function createPicture() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        final.can = canvas.getContext("2d");
        console.log(final.can);
        final.can.fillStyle = "#E3CEF6";
        final.can.fillRect(0, 0, 150, 100);
        Inhalt = new final.bild(0, 0);
        Inhalt.draw();
    }
})(final || (final = {}));
//# sourceMappingURL=final.js.map
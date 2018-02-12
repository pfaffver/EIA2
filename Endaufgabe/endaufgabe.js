/* endaufgabe
Name: Verena Pfaff
Matrikel: 256543
Datum: 12.02.2018 */
var endaufgabe;
(function (endaufgabe) {
    let s;
    window.addEventListener("load", fehlersuche);
    function fehlersuche() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        let crc2 = canvas.getContext("2d");
        s = new endaufgabe.Inhalt(0, 0);
        draw();
    }
    function draw() {
        s.draw();
    }
})(endaufgabe || (endaufgabe = {}));
//# sourceMappingURL=endaufgabe.js.map
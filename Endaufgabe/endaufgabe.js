/* endaufgabe
Name: Verena Pfaff
Matrikel: 256543
Datum: 12.02.2018 */
var endaufgabe;
(function (endaufgabe) {
    let s;
    let a;
    window.addEventListener("load", fehlersuche);
    function fehlersuche() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        let crc2 = canvas.getContext("2d");
        s = new endaufgabe.Inhalt(0, 0);
        s.draw(crc2);
        draw();
        let canvas2 = document.getElementsByTagName("canvas")[1];
        console.log(canvas);
        let can2 = canvas2.getContext("2d");
        a = new endaufgabe.Fehler(0, 0);
        a.draw(crc2);
        draw();
    }
    function draw() {
    }
})(endaufgabe || (endaufgabe = {}));
//# sourceMappingURL=endaufgabe.js.map
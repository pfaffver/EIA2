var aufgabe8;
(function (aufgabe8) {
    window.addEventListener("load", init);
    function init() {
        let anzahl = prompt("Gib hier ein, wie viele Quadrate du erzeugen willst");
        let anzahlNeu = parseInt(anzahl);
        let width = prompt("Gib hier ein, wie breit die Quadrate sein sollen");
        let widthNeu = parseInt(width);
        let height = prompt("Gib hier ein, wie hoch die Quadrate sein sollen");
        let heightNeu = parseInt(height);
        var x = 10;
        var total = 100;
        if (anzahlNeu >= x && anzahlNeu <= total) {
            for (var i = 0; i < anzahlNeu; i++) {
                drawSquare(Math.random() * 800, Math.random() * 600, "hsl(" + Math.random() * 360 + ", 100%, 50%)", widthNeu, heightNeu);
            }
        }
        else {
            window.alert("Deine Anzahl liegt nicht zwischen 10 und 100\nn versuche es noch einmal");
            init();
        }
    }
    function drawSquare(_x, _y, _color, _width, _height) {
        let quadrat = document.createElement("div");
        quadrat.style.backgroundColor = _color;
        quadrat.style.width = _width.toString();
        quadrat.style.height = _height.toString();
        quadrat.style.marginLeft = _x.toString();
        quadrat.style.marginTop = _y.toString();
        document.body.appendChild(quadrat);
    }
})(aufgabe8 || (aufgabe8 = {}));
//# sourceMappingURL=aufgabe8.js.map
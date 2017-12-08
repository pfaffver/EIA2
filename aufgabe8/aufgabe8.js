var aufgabe8;
(function (aufgabe8) {
    window.addEventListener("load", init);
    function init() {
        let anzahl = prompt("Gib hier ein, wie viele Quadrate du erzeugen willst");
        let anzahlNeu = parseInt(anzahl); //F�r die For Schleife - man kann nur Typ number mit Typ number vergleichen
        let width = prompt("Gib hier ein, wie breit die Quadrate sein sollen");
        let height = prompt("Gib hier ein, wie hoch die Quadrate sein sollen");
        var x = 10;
        var total = 100;
        if (anzahlNeu >= x && anzahlNeu <= total) {
            for (var i = 0; i < anzahlNeu; i++) {
                drawSquare(Math.random() * 800, Math.random() * 500, "hsl(" + Math.random() * 360 + ", 100%, 50%)", width, height);
            }
        }
        else {
            window.alert("Deine Anzahl liegt nicht zwischen 10 und 100\nVersuche es bitte noch einmal");
            init();
        }
    }
    function drawSquare(_x, _y, _color, _width, _height) {
        let quadrat = document.createElement("div");
        quadrat.style.backgroundColor = _color;
        quadrat.style.width = _width;
        quadrat.style.height = _height;
        quadrat.style.left = _x.toString(); //Sytle = CSS und erwartet immer ein String
        quadrat.style.top = _y.toString(); //Sytle = CSS und erwartet immer ein String
        document.body.appendChild(quadrat);
    }
})(aufgabe8 || (aufgabe8 = {}));
//# sourceMappingURL=aufgabe8.js.map
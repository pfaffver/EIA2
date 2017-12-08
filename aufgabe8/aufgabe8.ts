namespace aufgabe8 {
    window.addEventListener("load", init);

    function init(): void {
        let anzahl: string = prompt("Gib hier ein, wie viele Quadrate du erzeugen willst");
        let anzahlNeu: number = parseInt(anzahl); //FÜr die For Schleife - man kann nur Typ number mit Typ number vergleichen

        let width: string = prompt("Gib hier ein, wie breit die Quadrate sein sollen");

        let height: string = prompt("Gib hier ein, wie hoch die Quadrate sein sollen");

        var x: number = 10;
        var total: number = 100;
        if (anzahlNeu >= x && anzahlNeu <= total) {
            for (var i: number = 0; i < anzahlNeu; i++) {
                drawSquare(Math.random() * 800, Math.random() * 500, "hsl(" + Math.random() * 360 + ", 100%, 50%)", width, height)
            }
        }
        else {
            window.alert("Deine Anzahl liegt nicht zwischen 10 und 100\nVersuche es bitte noch einmal");
            init();
        }
    }

    function drawSquare(_x: number, _y: number, _color: string, _width: string, _height: string): void {

        let quadrat: HTMLDivElement = document.createElement("div");

        quadrat.style.backgroundColor = _color;
        quadrat.style.width = _width;
        quadrat.style.height = _height;
        quadrat.style.left = _x.toString(); //Sytle = CSS und erwartet immer ein String
        quadrat.style.top = _y.toString(); //Sytle = CSS und erwartet immer ein String

        document.body.appendChild(quadrat);
    }
}
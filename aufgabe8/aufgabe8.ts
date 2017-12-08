namespace aufgabe8 {
    window.addEventListener("load", init);

    function init(): void {
        let anzahl: string = prompt("Gib hier ein, wie viele Quadrate du erzeugen willst");
        let anzahlNeu: number = parseInt(anzahl);

        let width: string = prompt("Gib hier ein, wie breit die Quadrate sein sollen");
        let widthNeu: number = parseInt(width);

        let height: string = prompt("Gib hier ein, wie hoch die Quadrate sein sollen");
        let heightNeu: number = parseInt(height);

        var x: number = 10;
        var total: number = 100;
        if (anzahlNeu >= x && anzahlNeu <= total) {
            for (var i: number = 0; i < anzahlNeu; i++) {
                drawSquare(Math.random() * 800, Math.random() * 500, "hsl(" + Math.random() * 360 + ", 100%, 50%)", widthNeu, heightNeu);
            }
        }
        else {
            window.alert("Deine Anzahl liegt nicht zwischen 10 und 100\nVersuche es bitte noch einmal");
            init();
        }
    }

    function drawSquare(_x: number, _y: number, _color: string, _width: number, _height: number): void {

        let quadrat: HTMLDivElement = document.createElement("div");

        quadrat.style.backgroundColor = _color;
        quadrat.style.width = _width.toString();
        quadrat.style.height = _height.toString();
        quadrat.style.left = _x.toString();
        quadrat.style.top = _y.toString();

        document.body.appendChild(quadrat);
    }
}
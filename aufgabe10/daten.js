var Aufgabe10;
(function (Aufgabe10) {
    Aufgabe10.posten = [
        { art: "Baumart", name: "Edeltanne", preis: 15.55 },
        { art: "Baumart", name: "Wei�tanne", preis: 16.95 },
        { art: "Baumart", name: "Balsamtanne", preis: 19.95 },
        { art: "Baumart", name: "Nordmanntanne", preis: 18.50 },
        { art: "Halter", name: "schwarz", preis: 5.95 },
        { art: "Halter", name: "gold", preis: 6.95 },
        { art: "Halter", name: "silber", preis: 4.95 },
        { art: "Beleuchtung", name: "Lichterkette", preis: 9.55 },
        { art: "Beleuchtung", name: "Kerzen", preis: 4.95 },
        { art: "Schmuck", name: "Christbaumkugeln, bunt", preis: 1.99 },
        { art: "Schmuck", name: "Christbaumkugeln, rot", preis: 1.25 },
        { art: "Schmuck", name: "Christbaumkugeln, blau", preis: 1.25 },
        { art: "Schmuck", name: "Lametta, silber", preis: 1.50 },
        { art: "Schmuck", name: "Lametta, gold", preis: 1.50 },
        { art: "Schmuck", name: "Zuckerstangen", preis: 3.30 },
        { art: "Schmuck", name: "Stern", preis: 6.95 },
        { art: "Lieferung", name: "Standardversand", preis: 0.00 },
        { art: "Lieferung", name: "Expressversand", preis: 3.95 }
    ];
    Aufgabe10.bA = [];
    Aufgabe10.b = [];
    for (var i = 0; i < Aufgabe10.posten.length; i++) {
        if (Aufgabe10.posten[i].art == "Baumart") {
            var temp = [Aufgabe10.posten[i].name, Aufgabe10.posten[i].preis];
            Aufgabe10.bA.push(temp);
        }
        if (Aufgabe10.posten[i].art == "Beleuchtung") {
            var temp = [Aufgabe10.posten[i].name, Aufgabe10.posten[i].preis];
            Aufgabe10.b.push(temp);
        }
    }
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=daten.js.map
namespace Aufgabe10 {

    export interface Bestellposten {
        art: string;
        name: string;
        preis: number;
    }

    export let posten: Bestellposten[] = [
        { art: "Baumart", name: "Edeltanne", preis: 15.55 },
        { art: "Baumart", name: "Weisstanne", preis: 16.95 },
        { art: "Baumart", name: "Balsamtanne", preis: 19.95 },
        { art: "Baumart", name: "Nordmanntanne", preis: 18.50 },
        { art: "Halter", name: "schwarz", preis: 5.95 },
        { art: "Halter", name: "gold", preis: 6.95 },
        { art: "Halter", name: "silber", preis: 4.95 },
        { art: "Beleuchtung", name: "Lichterkette", preis: 9.55 },
        { art: "Beleuchtung", name: "Kerzen", preis: 4.95 },
        { art: "Schmuck", name: "Christbaumkugeln, bunt", preis: 1.99 },
        { art: "Schmuck", name: "Christbaumkugeln, rot gestreift", preis: 1.25 },
        { art: "Schmuck", name: "Lametta, silber", preis: 1.50 },
        { art: "Schmuck", name: "Lametta, gold", preis: 1.50 },
        { art: "Lieferung", name: "Standard", preis: 0.00 },
        { art: "Lieferung", name: "Express", preis: 3.95 }
    ];}
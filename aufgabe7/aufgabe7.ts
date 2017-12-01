namespace StudiVZ {
    interface StudentData {
        matrikelnummer: number;
        name: string;
        vorname: string;
        alter: number;
        geschlecht: boolean;
        kommentar: string;
        // Datenstruktur festgelegt
    }

    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 = männlich oder 1 = weiblich) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {
        let res = _input.split(",", 6); // var input Eingabe wir durch die "," getrennt + 6 Eingabem�glichkeiten

        if (parseInt(res[0]) == NaN)
        { return "Bitte gebe eine Zahl ein!" }

        else if ((res[1]) == "")
        { return "Bitte gebe deinen Namen ein!" }

        else if ((res[2]) == "")
        { return "Bitte gebe einen Vornamen ein!" }

        else if (parseInt(res[3]) == NaN)
        { return "Bitte gebe eine Zahl ein!" }

        else if (parseInt(res[4]) != 0 && parseInt(res[4]) != 1)
        { return "Bitte gebe dein Geschlecht ein!" }

        else if ((res[5]) == "")
        { return "Bitte gebe ein Kommentar ein!" }

        else {
            var einStudent: StudentData = {
                matrikelnummer: parseInt(res[0]),
                name: res[1],
                vorname: res[2],
                alter: parseInt(res[3]),
                geschlecht: parseInt(res[4]) == 1, //Da 1 abgespeichert ist (als right), ist 0 automatisch false!
                kommentar: res[5]
            }

            students.push(einStudent);
            console.log(students);
            return "Gespeichert";
        }
    }

    function queryData(_matrikel: number): string {
        for (var i: number = 0; i < students.length; i++) {
            if (students[i].matrikelnummer == _matrikel) {

                let geschlechtAusgabe: string;

                if (students[i].geschlecht)
                    geschlechtAusgabe = "weiblich";
                else
                    geschlechtAusgabe = "männlich";

                return students[i].matrikelnummer + " " + students[i].name + " " + students[i].vorname + " " + students[i].alter + " " + geschlechtAusgabe + " " + students[i].kommentar;

            }
        }
    }
}
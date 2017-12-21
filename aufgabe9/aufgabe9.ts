namespace aufgabe9 {
    window.addEventListener("load", init);
    document.addEventListener("keydown", handleKeydown);

    let letters: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    //Speichert den angeklickten Buchstaben
    let saveLetter: string = "";

    function init(): void {
        //Buchstaben Boxen
        for (let i: number = 0; i < letters.length; i++) {
            let l: HTMLDivElement = document.createElement("div");
            l.style.width = "2%";
            l.style.margin = "0.5em";
            l.style.height = "4%";
            l.style.backgroundColor = "#BDBDBD";
            l.innerText = letters[i];

            l.id = letters[i].toLowerCase();
            l.className = "letters";

            l.addEventListener("click", handleMouseClick);
            document.body.appendChild(l);
        }

        //Brief Box
        let b: HTMLDivElement = document.createElement("div");
        b.style.backgroundColor = "#F2F2F2";
        b.style.border = "3px solid lightgrey";
        b.style.width = "85%";
        b.style.height = "50%";
        b.style.marginTop = "2em";
        b.addEventListener("click", handleMouseClickInBox);
        document.body.appendChild(b);
    }

    //Event Anklicken des Buchstabens
    function handleMouseClick(_event: MouseEvent): void {
        let d: HTMLDivElement = <HTMLDivElement>_event.target;
        console.log(_event);
        d.style.color = "white";
        saveLetter = d.innerText;
        saveLetter = d.id.toUpperCase();
    }

    //Event Einfügen des Buchstabens in der BriefBox
    function handleMouseClickInBox(_event: MouseEvent): void {
        let e: HTMLDivElement = document.createElement("div");
        e.innerText = saveLetter;
        e.style.position = "absolute";
        e.style.left = _event.pageX + "px";
        e.style.top = _event.pageY + "px";
        document.body.appendChild(e);
        e.addEventListener("click", cancelLetterMouseDown);
    }


    //Event auswählen eines Buchstaben mit der Tastatur
    function handleKeydown(_event: KeyboardEvent): void {
        if (letters.indexOf(_event.key.toUpperCase()) != -1) {

            let k: HTMLDivElement = <HTMLDivElement>document.getElementById(_event.key);
            k.style.color = "white";
            saveLetter = _event.key.toUpperCase();

            console.log(_event);
        }
    }

    //Event eingefügter Buchstabe mit der Alt Taste wieder löschen
    function cancelLetterMouseDown(_event: MouseEvent): void {
        if (_event.altKey == false)
            return;

        if (_event.altKey == true) {
            let c: HTMLDivElement = <HTMLDivElement>_event.target;
            document.body.removeChild(c);
        }
    }

}
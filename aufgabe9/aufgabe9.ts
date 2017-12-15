namespace aufgabe9 {
    window.addEventListener("load", init);

    let letters: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    let saveLetter: string = "";
    let saveBox: string ="";

    function init(): void {
        //Buchstaben Boxen
        for (let i: number = 0; i < letters.length; i++) {
            let l: HTMLDivElement = document.createElement("div");
            l.style.width = "2%";
            l.style.margin = "0.5em";
            l.style.height = "4%";
            l.style.backgroundColor = "#BDBDBD";
            l.innerText = letters[i];
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
        console.log(_event.target)
        d.style.color = "grey";
        d.style.backgroundColor = "black";
        saveLetter = d.innerText;
    }

    //Event Einfügen des Buchstabens in der BriefBox
    function handleMouseClickInBox(_event: MouseEvent): void {
        let e: HTMLDivElement = document.createElement("div");
        e.innerText = saveLetter;
       // e.style.width = "2%";
       // e.style.margin = "0.5em";
       // e.style.height = "4%";
       // e.style.backgroundColor = "#BDBDBD";
        e.style.position = "absolute";
        e.style.left =  _event.pageX + "px";
        e.style.top = _event.pageY + "px";
        document.body.appendChild(e);
    }
}
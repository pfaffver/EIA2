namespace aufgabe9 {
    window.addEventListener("load", init);

    let letters: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    function init(): void {
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
    }

    function handleMouseClick(_event: MouseEvent): void {
        let d: HTMLHeadingElement = <HTMLHeadingElement>_event.target;
        d.style.color = "blue";
        d.style.backgroundColor = "lightblue";
    }
}
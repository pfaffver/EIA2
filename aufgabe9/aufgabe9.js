var aufgabe9;
(function (aufgabe9) {
    window.addEventListener("load", init);
    let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let saveLetter = "";
    function init() {
        for (let i = 0; i < letters.length; i++) {
            let l = document.createElement("div");
            l.style.width = "2%";
            l.style.margin = "0.5em";
            l.style.height = "4%";
            l.style.backgroundColor = "#BDBDBD";
            l.innerText = letters[i];
            l.addEventListener("click", handleMouseClick);
            document.body.appendChild(l);
        }
        let b = document.createElement("div");
        b.style.backgroundColor = "#F2F2F2";
        b.style.border = "3px solid lightgrey";
        b.style.width = "85%";
        b.style.height = "50%";
        b.style.marginTop = "2em";
        b.addEventListener("click", handleMouseClickInBox);
        document.body.appendChild(b);
    }
    function handleMouseClick(_event) {
        let d = _event.target;
        console.log(_event.target);
        d.style.color = "grey";
        d.style.backgroundColor = "black";
        saveLetter = d.innerText;
    }
    function handleMouseClickInBox(_event) {
        let e = document.createElement("div");
        e.innerText = saveLetter;
        e.style.position = "absolute";
        e.style.left = _event.pageX + "px";
        e.style.top = _event.pageY + "px";
        document.body.appendChild(e);
    }
})(aufgabe9 || (aufgabe9 = {}));
//# sourceMappingURL=aufgabe9.js.map
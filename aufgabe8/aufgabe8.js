var aufgabe8;
(function (aufgabe8) {
    window.addEventListener("load", init);
    function init() {
        for (let i = 0; i < 10; i++) {
            let h = document.createElement("h2");
            h.innerText = "Hallo, ich bin h2-Element Nr." + i;
            document.body.appendChild(h);
            if (i == 3)
                h.style.color = "red";
        }
    }
})(aufgabe8 || (aufgabe8 = {}));
//# sourceMappingURL=aufgabe8.js.map
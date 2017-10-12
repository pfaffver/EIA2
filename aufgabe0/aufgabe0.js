window.addEventListener("load", popup);
var person = prompt("Gib deinen Namen ein");
function popup() {
    if (person != null) {
        document.getElementById("hallo").innerHTML = "Hallo " + person + "wie geht es dir?";
    }
}
//# sourceMappingURL=aufgabe0.js.map
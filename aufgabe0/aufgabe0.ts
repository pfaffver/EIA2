window.addEventListener("load", popup);

var person: any = prompt("Gib deinen Namen ein");

function popup(): void {
if (person!= null) {
    document.getElementById("hallo").innerHTML = "Hallo " + person + " wie geht es dir?";
    }
}
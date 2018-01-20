var Aufgabe11;
(function (Aufgabe11) {
    window.addEventListener("load", createElements);
    window.addEventListener("change", warenkorb);
    var feedback = document.createElement("div");
    var name;
    var strasse;
    var hNr;
    var ort;
    var plz;
    var mail;
    var label;
    function createElements() {
        //Baumart:
        let baumart = document.getElementById("baumart");
        let selectBox = document.createElement("select");
        selectBox.name = "Deine Baumart";
        selectBox.id = "selectBaumart";
        let group = document.createElement("optgroup");
        group.label = "Tannenarten";
        baumart.appendChild(selectBox);
        selectBox.appendChild(group);
        for (let i = 0; i < Aufgabe11.posten.length; i++) {
            if (Aufgabe11.posten[i].art == "Baumart") {
                let opt = document.createElement("option");
                opt.innerText = Aufgabe11.posten[i].name;
                opt.id = "option" + i;
                selectBox.appendChild(opt);
            }
        }
        //Halterung:
        let halterung = document.getElementById("halterung");
        for (let i = 0; i < Aufgabe11.posten.length; i++) {
            if (Aufgabe11.posten[i].art == "Halter") {
                let radioB = document.createElement("input");
                radioB.type = "radio";
                radioB.name = "Deine Halterung";
                radioB.value = "Auswahl" + i;
                radioB.id = "radio" + i;
                halterung.appendChild(radioB);
                label = document.createElement("label");
                label.id = "label" + i;
                label.htmlFor = radioB.id;
                label.innerText = Aufgabe11.posten[i].name;
                halterung.appendChild(label);
            }
        }
        //Beleuchtung:
        let beleuchtung = document.getElementById("beleuchtung");
        let selectBox2 = document.createElement("select");
        selectBox2.name = "Deine Beleuchtung";
        selectBox2.id = "selectBeleuchtung";
        beleuchtung.appendChild(selectBox2);
        for (let i = 0; i < Aufgabe11.posten.length; i++) {
            if (Aufgabe11.posten[i].art == "Beleuchtung") {
                let opt2 = document.createElement("option");
                opt2.innerText = Aufgabe11.posten[i].name;
                opt2.id = "Kerzen" + i;
                selectBox2.appendChild(opt2);
            }
        }
        //Schmuckartikel:
        let schmuckartikel = document.getElementById("dekoration");
        for (let i = 0; i < Aufgabe11.posten.length; i++) {
            if (Aufgabe11.posten[i].art == "Schmuck") {
                let br1 = document.createElement("br");
                let br2 = document.createElement("br");
                let checkBox = document.createElement("input");
                checkBox.type = "checkbox";
                checkBox.name = "CheckboxSchmuckartikel";
                checkBox.value = "check";
                checkBox.id = "check" + i;
                schmuckartikel.appendChild(checkBox);
                let label2 = document.createElement("label");
                label2.id = "label2." + i;
                label2.htmlFor = checkBox.id; //Sorgt daf�r, dass man nicht genau in die Box klicken muss
                label2.innerText = Aufgabe11.posten[i].name;
                schmuckartikel.appendChild(label2);
                let stepper = document.createElement("input");
                stepper.type = "number";
                stepper.name = "StepperSchmuckartikel" + i;
                stepper.value = "1";
                stepper.id = "stepper" + i;
                stepper.min = "0";
                stepper.max = "5";
                stepper.step = "1";
                schmuckartikel.appendChild(br1);
                schmuckartikel.appendChild(stepper);
                schmuckartikel.appendChild(br2);
            }
        }
        //Pers�nliche Daten:
        let daten = document.getElementById("daten");
        name = document.createElement("input");
        name.type = "text";
        name.name = "Name";
        name.placeholder = "Name";
        name.pattern = "[a-zA-Z]{1,}";
        name.required = true;
        daten.appendChild(name);
        strasse = document.createElement("input");
        strasse.type = "text";
        strasse.name = "Strasse";
        strasse.placeholder = "Strasse";
        strasse.pattern = "[a-zA-Z]{1,}";
        strasse.required = true;
        daten.appendChild(strasse);
        hNr = document.createElement("input");
        hNr.type = "text";
        hNr.name = "Hausnummer";
        hNr.placeholder = "Hausnummer";
        hNr.pattern = "[0-9]{1,}";
        hNr.required = true;
        daten.appendChild(hNr);
        ort = document.createElement("input");
        ort.type = "text";
        ort.name = "Ort";
        ort.placeholder = "Ort";
        ort.pattern = "[a-zA-Z]{1,}";
        ort.required = true;
        daten.appendChild(ort);
        plz = document.createElement("input");
        plz.type = "text";
        plz.name = "PLZ";
        plz.placeholder = "Postleitzahl";
        plz.pattern = "[0-9]{5}";
        plz.required = true;
        daten.appendChild(plz);
        mail = document.createElement("input");
        mail.type = "email";
        mail.name = "E-Mail";
        mail.placeholder = "E-Mail";
        mail.required = true;
        daten.appendChild(mail);
        //Lieferoptionen:
        let lieferopt = document.getElementById("lieferoptionen");
        for (let i = 0; i < Aufgabe11.posten.length; i++) {
            if (Aufgabe11.posten[i].art == "Lieferung") {
                var radioB2 = document.createElement("input");
                radioB2.type = "radio";
                radioB2.name = "Deine Lieferoption";
                radioB2.value = "Auswahl" + i;
                radioB2.id = "radio2." + i;
                lieferopt.appendChild(radioB2);
                var label3 = document.createElement("label");
                label3.id = "label3." + i;
                label3.htmlFor = radioB2.id;
                label3.innerText = Aufgabe11.posten[i].name;
                lieferopt.appendChild(label3);
            }
        }
        //Best�tigungseingabe:
        let button = document.getElementById("eingabe");
        let submit = document.createElement("button");
        //submit.name = "Button";
        submit.type = "submit";
        submit.innerText = "Bestellung abschicken";
        //submit.addEventListener("mousedown", handleMouseDown);
        button.appendChild(submit);
    }
    var basketBaumart = [Aufgabe11.baumartStandard[0], "" + Aufgabe11.baumartStandard[1]];
    var basketHalter = ["kein Halter", "0"];
    var basketBeleuchtung = [Aufgabe11.light[0][0], "" + Aufgabe11.light[0][1]];
    var basketSchmuck = [];
    var basketLieferopt = ["keine Lieferoption ausgew�hlt", "0"];
    function warenkorb(_event) {
        let target = _event.target;
        console.log(target);
        let stepper = [];
        let checkBoxes = [];
        let gesamtpreis = 0;
        for (let i = 0; i < Aufgabe11.posten.length; i++) {
            console.log(_event.target);
            if (Aufgabe11.posten[i].art == "Schmuck") {
                stepper[i] = document.getElementById("stepper" + i);
                checkBoxes[i] = document.getElementById("check" + i);
            }
            if (target.value == Aufgabe11.posten[i].name && target.id == "selectBaumart") {
                basketBaumart[0] = Aufgabe11.posten[i].name;
                basketBaumart[1] = "" + Aufgabe11.posten[i].preis;
            }
            if (target.id == "radio" + i) {
                basketHalter[0] = Aufgabe11.posten[i].name;
                basketHalter[1] = "" + Aufgabe11.posten[i].preis;
            }
            if (target.id == "radio2." + i) {
                basketLieferopt[0] = Aufgabe11.posten[i].name;
                basketLieferopt[1] = "" + Aufgabe11.posten[i].preis;
            }
            if (target.value == Aufgabe11.posten[i].name && target.id == "selectBeleuchtung") {
                basketBeleuchtung[0] = Aufgabe11.posten[i].name;
                basketBeleuchtung[1] = "" + Aufgabe11.posten[i].preis;
            }
            if (target.id == "check" + i || target.id == "stepper" + i) {
                basketSchmuck[i] = [Aufgabe11.posten[i].name, "" + (Aufgabe11.posten[i].preis * parseInt(stepper[i].value))];
            }
        }
        let korb = document.getElementById("warenkorb");
        korb.style.width = "30%";
        korb.style.height = "auto";
        korb.style.backgroundColor = "lightgrey";
        korb.innerHTML = "<span id='WK'>Warenkorb</span>" + "<br>";
        korb.innerHTML += "" + basketBaumart[0] + " " + basketBaumart[1] + "� <br>";
        korb.innerHTML += "Weihnachtsbaumst�nder: " + basketHalter[0] + " " + basketHalter[1] + "� <br>";
        korb.innerHTML += "" + basketBeleuchtung[0] + " " + basketBeleuchtung[1] + "� <br>";
        korb.innerHTML += " " + basketLieferopt[0] + " " + basketLieferopt[1] + "� <br>";
        gesamtpreis = parseFloat(basketBaumart[1]) + parseFloat(basketHalter[1]) + parseFloat(basketLieferopt[1]);
        for (let i = 0; i < stepper.length; i++) {
            if (checkBoxes[i] != null && checkBoxes[i].checked == true) {
                gesamtpreis += parseFloat(basketSchmuck[i][1]);
                korb.innerHTML += "" + basketSchmuck[i][0] + " " + basketSchmuck[i][1] + "� <br>";
            }
        }
    }
    function handleMouseDown(_event) {
        feedback.innerText = "";
        if (name.checkValidity() == false || strasse.checkValidity() == false || hNr.checkValidity() == false || ort.checkValidity() == false || plz.checkValidity() == false || mail.checkValidity() == false) {
            feedback.innerText = "Fehler bei der Eingabe deiner Daten - Versuche es erneut";
            feedback.style.color = "red";
            feedback.style.position = "absolute";
            feedback.style.top = "70%";
            feedback.style.right = "4%";
            document.body.appendChild(feedback);
        }
        else {
            feedback.innerText = "Vielen Dank - Deine Bestellung wird bearbeitet";
            feedback.style.color = "green";
            feedback.style.position = "absolute";
            feedback.style.top = "70%";
            feedback.style.right = "7%";
            document.body.appendChild(feedback);
        }
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=main.js.map
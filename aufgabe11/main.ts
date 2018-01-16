namespace Aufgabe11 {
    window.addEventListener("load", createElements);
    window.addEventListener("change", warenkorb);
    
    var feedback: HTMLDivElement = document.createElement("div");

    var name: HTMLInputElement;
    var strasse: HTMLInputElement;
    var hNr: HTMLInputElement;
    var ort: HTMLInputElement;
    var plz: HTMLInputElement;
    var mail: HTMLInputElement;
    var label: HTMLLabelElement;

    var basketBaumart: string[] = [baumartStandard[0], "" + baumartStandard[1]];
    var basketHalter: string[] = ["kein Halter", "0"];
    var basketBeleuchtung: string[] = [light[0][0], "" + light[0][1]];
    var basketSchmuck: string[][] = [];
    var basketLieferopt: string[] = ["keine Lieferoption ausgewählt", "0"];

    function createElements(): void {
        //Baumart:
        let baumart: HTMLDivElement = <HTMLDivElement>document.getElementById("baumart");
        let selectBox: HTMLSelectElement = document.createElement("select");
        selectBox.name = "Deine Baumart";
        selectBox.id = "selectBaumart";
        let group: HTMLOptGroupElement = document.createElement("optgroup");
        group.label = "Tannenarten";
        baumart.appendChild(selectBox);
        selectBox.appendChild(group);
        for (let i: number = 0; i < posten.length; i++) {
            if (posten[i].art == "Baumart") {
                let opt: HTMLElement = document.createElement("option");
                opt.innerText = posten[i].name;
                opt.id = "option" + i;
                selectBox.appendChild(opt);

            }
        }

        //Halterung:
        let halterung: HTMLDivElement = <HTMLDivElement>document.getElementById("halterung");
        for (let i: number = 0; i < posten.length; i++) {
            if (posten[i].art == "Halter") {
                let radioB: HTMLInputElement = document.createElement("input");
                radioB.type = "radio";
                radioB.name = "Deine Halterung";
                radioB.value = "Auswahl" + i;
                radioB.id = "radio" + i;
                halterung.appendChild(radioB);

                label = document.createElement("label");
                label.id = "label" + i;
                label.htmlFor = radioB.id;
                label.innerText = posten[i].name;
                halterung.appendChild(label);
            }
        }

        //Beleuchtung:
        let beleuchtung: HTMLDivElement = <HTMLDivElement>document.getElementById("beleuchtung");
        let selectBox2: HTMLSelectElement = document.createElement("select");
        selectBox2.name = "Deine Beleuchtung";
        selectBox2.id = "selectBeleuchtung";
        beleuchtung.appendChild(selectBox2);
        for (let i: number = 0; i < posten.length; i++) {

            if (posten[i].art == "Beleuchtung") {
                let opt2: HTMLElement = document.createElement("option");
                opt2.innerText = posten[i].name;
                opt2.id = "option2." + i;
                selectBox2.appendChild(opt2);
            }
        }

        //Schmuckartikel:
        let schmuckartikel: HTMLDivElement = <HTMLDivElement>document.getElementById("dekoration");
        for (let i: number = 0; i < posten.length; i++) {
            if (posten[i].art == "Schmuck") {

                let br1: HTMLElement = document.createElement("br");
                let br2: HTMLElement = document.createElement("br");

                let checkBox: HTMLInputElement = document.createElement("input");
                checkBox.type = "checkbox";
                checkBox.name = "Dein Schmuckartikel";
                checkBox.value = "check";
                checkBox.id = "check" + i;
                schmuckartikel.appendChild(checkBox);

                let label2: HTMLLabelElement = document.createElement("label");
                label2.id = "label2." + i;
                label2.htmlFor = checkBox.id; //Sorgt dafür, dass man nicht genau in die Box klicken muss
                label2.innerText = posten[i].name;
                schmuckartikel.appendChild(label2);

                let stepper: HTMLInputElement = document.createElement("input");
                stepper.type = "number";
                stepper.name = "Schmuckartikel" + i;
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

        //Persönliche Daten:
        let daten: HTMLDivElement = <HTMLDivElement>document.getElementById("daten");
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
        let lieferopt: HTMLDivElement = <HTMLDivElement>document.getElementById("lieferoptionen");
        for (let i: number = 0; i < posten.length; i++) {
            if (posten[i].art == "Lieferung") {
                var radioB2: HTMLInputElement = document.createElement("input");
                radioB2.type = "radio";
                radioB2.name = "Deine Lieferoption";
                radioB2.value = "radio2." + i;
                radioB2.id = "Auswahl" + i;
                lieferopt.appendChild(radioB2);

                var label3: HTMLLabelElement = document.createElement("label");
                label3.id = "label3." + i;
                label3.htmlFor = radioB2.id;
                label3.innerText = posten[i].name;
                lieferopt.appendChild(label3);
            }
        }

        //Bestätigungseingabe:
        let button: HTMLDivElement = <HTMLDivElement>document.getElementById("eingabe");
        let submit: HTMLButtonElement = document.createElement("button");
        //submit.name = "Button";
        submit.type = "submit";
        submit.innerText = "Bestellung abschicken";
        submit.addEventListener("mousedown", handleMouseDown);
        button.appendChild(submit);
    }

    function warenkorb(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        console.log(target);
        let stepper: HTMLInputElement[] = [];
        let checkBoxes: HTMLInputElement[] = [];
        let gesamtpreis: number = 0;

        for (let i: number = 0; i < posten.length; i++) {
            console.log(_event.target);

            if (posten[i].art == "Schmuck") {
                stepper[i] = <HTMLInputElement>document.getElementById("stepper" + i);
                checkBoxes[i] = <HTMLInputElement>document.getElementById("check" + i);
            }
            if (target.value == posten[i].name && target.id == "selectBaumart") {
                basketBaumart[0] = posten[i].name;
                basketBaumart[1] = "" + posten[i].preis;
            }
            if (target.id == "radio" + i) {
                basketHalter[0] = posten[i].name;
                basketHalter[1] = "" + posten[i].preis;
            }
            if (target.id == "radio2." + i) {
                basketLieferopt[0] = posten[i].name;
                basketLieferopt[1] = "" + posten[i].preis;
            }
            if (target.value == posten[i].name && target.id == "selectBeleuchtung") {
                basketBeleuchtung[0] = posten[i].name;
                basketBeleuchtung[1] = "" + posten[i].preis;
            }
            if (target.id == "check" + i || target.id == "stepper" + i) {
                basketSchmuck[i] = [posten[i].name, "" + (posten[i].preis * parseInt(stepper[i].value))];
            }
        }

        let korb: HTMLDivElement = <HTMLDivElement>document.getElementById("warenkorb");
        korb.style.width = "30%";
        korb.style.height = "auto";
        korb.style.backgroundColor = "lightgrey";
        korb.innerHTML = "<span id='WK'>Warenkorb</span>" + "<br>";
        korb.innerHTML += "" + basketBaumart[0] + " " + basketBaumart[1] + "€ <br>";
        korb.innerHTML += "Weihnachtsbaumständer: " + basketHalter[0] + " " + basketHalter[1] + "€ <br>";
        korb.innerHTML += "" + basketBeleuchtung[0] + " " + basketBeleuchtung[1] + "€ <br>";
        korb.innerHTML += " " + basketLieferopt[0] + " " + basketLieferopt[1] + "€ <br>";


        gesamtpreis = parseFloat(basketBaumart[1]) + parseFloat(basketHalter[1]) + parseFloat(basketLieferopt[1]);
        for (let i: number = 0; i < stepper.length; i++) {
            if (checkBoxes[i] != null && checkBoxes[i].checked == true) {
                gesamtpreis += parseFloat(basketSchmuck[i][1]);
                korb.innerHTML += "" + basketSchmuck[i][0] + " " + basketSchmuck[i][1] + "€ <br>";
            }
        }
    }

    function handleMouseDown(_event: MouseEvent): void {

        feedback.innerText = "";

        if (name.checkValidity() == false || strasse.checkValidity() == false || hNr.checkValidity() == false || ort.checkValidity() == false || plz.checkValidity() == false || mail.checkValidity() == false) {
            feedback.innerText = "Fehler bei der Eingabe deiner Daten - Versuche es erneut";
            feedback.style.color = "red";
            feedback.style.position ="absolute";
            feedback.style.top ="70%";
            feedback.style.right ="4%";
            document.body.appendChild(feedback);
        }
        else {
            feedback.innerText = "Vielen Dank - Deine Bestellung wird bearbeitet";
            feedback.style.color = "green";
            feedback.style.position ="absolute";
            feedback.style.top ="70%";
            feedback.style.right ="7%";
            document.body.appendChild(feedback);
        }
    }    
}
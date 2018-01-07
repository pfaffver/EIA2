namespace Aufgabe10 {
    window.addEventListener("load", createElements);
    window.addEventListener("change", warenkorb);


    var name: HTMLInputElement;
    var strasse: HTMLInputElement;
    var hNr: HTMLInputElement;
    var ort: HTMLInputElement;
    var plz: HTMLInputElement;
    var mail: HTMLInputElement;
    var label: HTMLLabelElement;

    var baumArt: string[] = [posten[0].name, "" + posten[0].preis];
    var halter: string[] = ["kein Halter", "0"];
    var beleuchtungW: string[] = [];
    var schmuck: string[][] = [];
    var basketLieferopt: string[] = ["keine Lieferoption ausgewählt", "0"];



    function createElements(): void {
        //Baumart:
        let baumart: HTMLDivElement = <HTMLDivElement>document.getElementById("baumart");
        let selectBox: HTMLSelectElement = document.createElement("select");
        selectBox.name = "SelectBaumart";
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
                radioB.name = "radioGroupHalterung";
                radioB.value = "radio" + i;
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
        selectBox2.name = "SelectBeleuchtung";
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
                
                let label2: HTMLLabelElement = document.createElement("label");
                label2.id = "label2." + i;
                label2.innerText = posten[i].name;
                schmuckartikel.appendChild(label2);
                
                let stepper: HTMLInputElement = document.createElement("input");
                stepper.type = "number";
                stepper.name = "StepperSchmuckartikel" + i;
                stepper.value = "0";
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
        name.name = "DatenName";
        name.placeholder = "Name";
        name.pattern = "[a-zA-Z]{1,}";
        name.required = true;
        daten.appendChild(name);

        strasse = document.createElement("input");
        strasse.type = "text";
        strasse.name = "DatenStrasse";
        strasse.placeholder = "Strasse";
        strasse.pattern = "[a-zA-Z]{1,}";
        strasse.required = true;
        daten.appendChild(strasse);

        hNr = document.createElement("input");
        hNr.type = "text";
        hNr.name = "DatenHausnummer";
        hNr.placeholder = "Hausnummer";
        hNr.pattern = "[0-9]{1,}";
        hNr.required = true;
        daten.appendChild(hNr);

        ort = document.createElement("input");
        ort.type = "text";
        ort.name = "DatenOrt";
        ort.placeholder = "Ort";
        ort.pattern = "[a-zA-Z]{1,}";
        ort.required = true;
        daten.appendChild(ort);

        plz = document.createElement("input");
        plz.type = "text";
        plz.name = "DatenPLZ";
        plz.placeholder = "Postleitzahl";
        plz.pattern = "[0-9]{5}";
        plz.required = true;
        daten.appendChild(plz);

        mail = document.createElement("input");
        mail.type = "email";
        mail.name = "DatenMail";
        mail.placeholder = "E-Mail";
        mail.required = true;
        daten.appendChild(mail);

        //Lieferoptionen:
        let lieferopt: HTMLDivElement = <HTMLDivElement>document.getElementById("lieferoptionen");
        for (let i: number = 0; i < posten.length; i++) {
            if (posten[i].art == "Lieferung") {
                var radioB2: HTMLInputElement = document.createElement("input");
                radioB2.type = "radio";
                radioB2.name = "radioGroupLieferoptionen";
                radioB2.value = "radio2." + i;
                radioB2.id = "radio2." + i;
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
        submit.name = "Button";
        submit.type = "button";
        submit.innerText = "Bestellung abschicken";
        submit.addEventListener("mousedown", handleMouseDown);
        button.appendChild(submit);
    }

    function warenkorb(_event: Event): void {
       console.log(_event.target);
       let target: HTMLInputElement = <HTMLInputElement>_event.target;
       let stepper: HTMLInputElement[] = [];
       let gesamtpreis: number = 0;

        for (let i: number = 0; i < posten.length; i++) {
            if (posten[i].art == "Schmuck") {
               stepper[i] = <HTMLInputElement>document.getElementById("stepper" + i);
            }
            if (target.value == posten[i].name && target.id == "selectBaumart") {
                baumArt[0] = posten[i].name;
               baumArt[1] = "" + posten[i].preis;
            }
            if (target.id == "radio" + i) {
                halter[0] = posten[i].name;
               halter[1] = "" + posten[i].preis;

            }
            if (target.id == "radio2." + i) {
               basketLieferopt[0] = posten[i].name;
                basketLieferopt[1] = "" + posten[i].preis;

            }
            if (target.value == posten[i].name && target.id == "selectBeleuchtung") {
                beleuchtungW[0] = posten[i].name;
                beleuchtungW[1] = "" + posten[i].preis;

            }
            if (target.id == "stepper" + i) {
                schmuck[i] = [posten[i].name, "" + (posten[i].preis * parseInt(stepper[i].value))];
            }
        }
        
        let korb: HTMLDivElement = <HTMLDivElement>document.getElementById("warenkorb");
        korb.innerHTML = "Warenkorb";
        korb.innerHTML += "" + baumArt[0] + " " + baumArt[1] + " <br>";
        korb.innerHTML += "Weihnachtsbaumständer: " + halter[0] + " " + halter[1] + " <br>";
        korb.innerHTML += "" + beleuchtungW[0] + " " + beleuchtungW[1] + " <br>";
        korb.innerHTML += " " + basketLieferopt[0] + " " + basketLieferopt[1] + " <br>";
        gesamtpreis = parseFloat(halter[1]) + parseFloat(halter[1]) + parseFloat(basketLieferopt[1]);
      
        for (let i: number = 0; i < stepper.length; i++) {
                gesamtpreis += parseFloat(baumArt[i][1]);
                korb.innerHTML += "" + baumArt[i][0] + " " + baumArt[i][1] + " <br>";
        }
        korb.innerHTML += "<hr> Gesamtpreis: " + Math.round(gesamtpreis * 100) / 100 + "";
    }



    function handleMouseDown(_event: MouseEvent): void {
        let feedback: HTMLDivElement = document.createElement("div");
        
        if (name.checkValidity() == false || strasse.checkValidity() == false || hNr.checkValidity() == false || ort.checkValidity() == false || plz.checkValidity() == false || mail.checkValidity() == false) {
            feedback.innerText = "Fehler bei der Eingabe deiner Daten - Versuche es erneut";
            feedback.style.color = "red";
            document.body.appendChild(feedback);
        }
        else {
            feedback.innerText = "Vielen Dank - Deine Bestellung wird bearbeitet";
            feedback.style.color = "green";
            document.body.appendChild(feedback);
        }
    }
}
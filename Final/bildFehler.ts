/* Endaufgabe
Name: Verena Pfaff 
Matrikel: 256543
Datum: 13.02.2018 */

namespace final {

    export class bildFehler extends bild {
        x: number;
        y: number;

        constructor(_x: number, _y: number, _color: string) {
            super(_x, _y, _color);
        }
    }
}
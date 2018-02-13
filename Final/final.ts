namespace final {

    window.addEventListener("load", createPicture);

    export let can: CanvasRenderingContext2D;
    let Inhalt: bild;
    let InhaltFehler: bildFehler;

    function createPicture(): void {
        // erstes Canvas
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        can = canvas.getContext("2d");
        console.log(can);

        Inhalt = new bild(0, 0);
        Inhalt.draw();
        
        // zweites Canvas
        let canvas2: HTMLCanvasElement = document.getElementsByTagName("canvas")[1];
        console.log(canvas);

        can = canvas2.getContext("2d");
        console.log(can);

        InhaltFehler = new bildFehler(0, 0);
        InhaltFehler.draw();
    }
}
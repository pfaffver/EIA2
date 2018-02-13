namespace final {

    window.addEventListener("load", createPicture);

    export let can: CanvasRenderingContext2D;
    let Inhalt: bild;

    function createPicture(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        can = canvas.getContext("2d");
        console.log(can);

        Inhalt = new bild(0, 0);
        Inhalt.draw();
        
        let canvas2: HTMLCanvasElement = document.getElementsByTagName("canvas")[1];
        console.log(canvas);

        can = canvas2.getContext("2d");
        console.log(can);

        Inhalt = new bild(0, 0);
        Inhalt.draw();
    }
}
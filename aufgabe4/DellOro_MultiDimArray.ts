namespace L04_MultiDim {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;
    let squares: number[][] = [];


    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);

        console.log("setTimeout");
        animate();

        for (let i: number = 0; i < 100; i++) {
            squares[i] = [200, 150];
        }
        
        // hier Hintergrund speichern
    }

    function animate(): void {
        console.log("Timeout");
        crc2.clearRect(0, 0, 400, 300); // hier Hintergrund restaurieren

        for (let i: number = 0; i < squares.length; i++) {
            squares[i][0] += Math.random() * 4 - 2; // hier experimentieren um
            squares[i][1] += Math.random() * 4 - 2; // andere Bewegungsmuster zu finden
            crc2.fillStyle = "#ff0000";
            crc2.fillRect(squares[i][0], squares[i][1], 20, 20);
        }


        window.setTimeout(animate, 20);
    }

}
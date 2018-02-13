namespace final {

    window.addEventListener("load", createPicture);

    export let can: CanvasRenderingContext2D;

    function createPicture(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        can = canvas.getContext("2d");
        console.log(can);

        can.fillStyle = "#E3CEF6";
        can.fillRect(0, 0, 150, 100);

        can.beginPath();
        can.moveTo(65, 50);
        can.lineTo(35, 50);
        can.lineTo(50, 90);
        can.closePath();
        can.fillStyle = "#8A4B08";
        can.fill();

        can.beginPath();
        can.moveTo(55, 50);
        can.lineTo(80, 10);
        can.strokeStyle = "#2E64FE";
        can.stroke();

        can.beginPath();
        can.moveTo(80, 10);
        can.lineTo(70, 10);
        can.lineTo(85, 20);
        can.closePath();
        can.stroke();
        can.fillStyle = "#2E64FE";
        can.fill();

        can.beginPath();
        can.arc(80, 10, 2, 0, 2 * Math.PI);
        can.fillStyle = "#2E64FE";
        can.fill();

        can.beginPath();
        can.arc(40, 45, 12, 0, 2 * Math.PI);
        can.fillStyle = "#FA5858";
        can.fill();

        can.beginPath();
        can.arc(60, 45, 12, 0, 2 * Math.PI);
        can.fillStyle = "#F7FE2E";
        can.fill();

        can.beginPath();
        can.arc(50, 30, 12, 0, 2 * Math.PI);
        can.fillStyle = "#3B240B";
        can.fill();
        }
}
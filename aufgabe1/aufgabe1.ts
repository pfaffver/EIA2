window.addEventListener("load", ski);

function ski(): void {
    let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    console.log(canvas);

    let can: CanvasRenderingContext2D = canvas.getContext("2d");
    console.log(can);

    can.fillStyle = "#ff0000";
    can.fillRect(0, 0, 400, 300);

    can.beginPath();
    can.moveTo(0, 0);
    can.lineTo(400, 300);
    can.stroke();

    can.beginPath();
    can.moveTo(100, 100);
    can.lineTo(120, 130);
    can.lineTo(80, 130);
    can.closePath();
    can.stroke();
    can.fillStyle = "#0000ff";
    can.fill();

    can.beginPath();
    can.arc(200, 50, 40, 0, 2 * Math.PI);
    can.fill();
}
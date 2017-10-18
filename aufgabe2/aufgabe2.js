window.addEventListener("load", ski);
var aufgabe2;
(function (aufgabe2) {
    function ski() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        let can = canvas.getContext("2d");
        console.log(can);
        can.fillStyle = "#5882FA";
        can.fillRect(0, 0, 800, 600);
        /*Berg*/
        can.beginPath();
        can.moveTo(250, 100);
        can.lineTo(50, 500);
        can.lineTo(450, 500);
        can.closePath();
        can.stroke();
        can.fillStyle = "#BDBDBD";
        can.fill();
        /*Berg*/
        can.beginPath();
        can.moveTo(450, 50);
        can.lineTo(200, 400);
        can.lineTo(700, 400);
        can.closePath();
        can.stroke();
        can.fillStyle = "#BDBDBD";
        can.fill();
        /*Berg*/
        can.beginPath();
        can.moveTo(600, 150);
        can.lineTo(500, 400);
        can.lineTo(700, 400);
        can.closePath();
        can.stroke();
        can.fillStyle = "#BDBDBD";
        can.fill();
        /*Sonne*/
        can.beginPath();
        can.arc(100, 70, 30, 0, 2 * Math.PI);
        can.fillStyle = "#F7FE2E";
        can.fill();
        /*Wolke*/
        can.beginPath();
        can.arc(600, 70, 10, 0, 2 * Math.PI);
        can.fillStyle = "#FAFAFA";
        can.fill();
        can.beginPath();
        can.arc(610, 78, 10, 0, 2 * Math.PI);
        can.fillStyle = "#FAFAFA";
        can.fill();
        can.beginPath();
        can.arc(600, 85, 10, 0, 2 * Math.PI);
        can.fillStyle = "#FAFAFA";
        can.fill();
        can.beginPath();
        can.arc(590, 78, 10, 0, 2 * Math.PI);
        can.fillStyle = "#FAFAFA";
        can.fill();
        /*Piste*/
        can.beginPath();
        can.moveTo(0, 100);
        can.lineTo(800, 400);
        can.lineTo(800, 600);
        can.lineTo(0, 600);
        can.closePath();
        can.stroke();
        can.fillStyle = "#EFF2FB";
        can.fill();
        /*Lift*/
        can.beginPath();
        can.moveTo(0, 150);
        can.lineTo(800, 450);
        can.stroke();
        /*Liftb�gel*/
        can.beginPath();
        can.moveTo(300, 263);
        can.lineTo(300, 300);
        can.stroke();
        /*Liftsitz*/
        can.beginPath();
        can.arc(300, 300, 10, 0, 1 * Math.PI);
        can.fillStyle = "#6E6E6E";
        can.fill();
        /*Baum*/
        can.beginPath();
        can.moveTo(100, 500);
        can.lineTo(125, 450);
        can.lineTo(150, 500);
        can.closePath();
        can.stroke();
        can.fillStyle = "#0B610B";
        can.fill();
        /*Baum*/
        can.beginPath();
        can.moveTo(650, 550);
        can.lineTo(750, 550);
        can.lineTo(700, 400);
        can.closePath();
        can.stroke();
        can.fillStyle = "#0B610B";
        can.fill();
    }
})(aufgabe2 || (aufgabe2 = {}));
//# sourceMappingURL=aufgabe2.js.map
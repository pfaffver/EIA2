var L6_InheritanceCommonSuperclass;
(function (L6_InheritanceCommonSuperclass) {
    let shapes = [];
    let n = 10;
    window.addEventListener("load", init);
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        L6_InheritanceCommonSuperclass.crc2 = canvas.getContext("2d");
        for (let i = 0; i < n; i++) {
            let s = new L6_InheritanceCommonSuperclass.Square(300, 150);
            shapes.push(s);
            let c = new L6_InheritanceCommonSuperclass.Circle(100, 150);
            shapes.push(c);
        }
        console.log(shapes);
        animate();
    }
    function animate() {
        L6_InheritanceCommonSuperclass.crc2.fillStyle = "black";
        L6_InheritanceCommonSuperclass.crc2.fillRect(0, 0, L6_InheritanceCommonSuperclass.crc2.canvas.width, L6_InheritanceCommonSuperclass.crc2.canvas.height);
        for (let i = 0; i < shapes.length; i++) {
            let s = shapes[i];
            s.update();
        }
        window.setTimeout(animate, 20);
    }
})(L6_InheritanceCommonSuperclass || (L6_InheritanceCommonSuperclass = {}));
//# sourceMappingURL=Main.js.map
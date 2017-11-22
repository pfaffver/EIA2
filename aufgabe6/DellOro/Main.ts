namespace L6_InheritanceCommonSuperclass {
    export let crc2: CanvasRenderingContext2D;
    let shapes: MovingShape[] = [];
    let n: number = 10;

    window.addEventListener("load", init);

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        for (let i: number = 0; i < n; i++) {
            let s: Square = new Square(300, 150);
            shapes.push(s);
            let c: Circle = new Circle(100, 150);
            shapes.push(c);
        }
        console.log(shapes);
        animate();
    }

    function animate(): void {
        crc2.fillStyle = "black";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        for (let i: number = 0; i < shapes.length; i++) {
            let s: MovingShape = shapes[i];
            s.update();
        }

        window.setTimeout(animate, 20);
    }
}
var L6_InheritanceCommonSuperclass;
(function (L6_InheritanceCommonSuperclass) {
    class Circle extends L6_InheritanceCommonSuperclass.MovingShape {
        constructor(_x, _y) {
            super(_x, _y);
            console.log("Create circle");
            this.speed = 0.1;
            this.setRandomPosition(); // x und y werden neu definiert
            this.setRandomTargetPosition();
        }
        setRandomTargetPosition() {
            this.xTarget = Math.random() * L6_InheritanceCommonSuperclass.crc2.canvas.width;
            this.yTarget = Math.random() * L6_InheritanceCommonSuperclass.crc2.canvas.height;
        }
        draw() {
            L6_InheritanceCommonSuperclass.crc2.fillStyle = this.color;
            L6_InheritanceCommonSuperclass.crc2.beginPath();
            L6_InheritanceCommonSuperclass.crc2.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            L6_InheritanceCommonSuperclass.crc2.fill();
        }
        move() {
            let xDiff = this.xTarget - this.x;
            let yDiff = this.yTarget - this.y;
            if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1)
                this.setRandomTargetPosition();
            else {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
        }
    }
    L6_InheritanceCommonSuperclass.Circle = Circle;
})(L6_InheritanceCommonSuperclass || (L6_InheritanceCommonSuperclass = {}));
//# sourceMappingURL=Circle.js.map
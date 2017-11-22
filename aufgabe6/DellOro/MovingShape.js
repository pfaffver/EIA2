var L6_InheritanceCommonSuperclass;
(function (L6_InheritanceCommonSuperclass) {
    class MovingShape {
        constructor(_x, _y) {
            console.log("Create shape");
            this.setRandomStyle();
            //this.setRandomPosition();
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.move();
            this.draw();
        }
        draw() {
            // abstract
        }
        move() {
            this.x += Math.random() * 4 - 2;
            this.y += Math.random() * 4 - 2;
        }
        setRandomPosition() {
            this.x = Math.random() * 200;
            this.y = Math.random() * 200;
        }
        // different random style
        setRandomStyle() {
            this.size = Math.random() * 10 + 5;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
    }
    L6_InheritanceCommonSuperclass.MovingShape = MovingShape;
})(L6_InheritanceCommonSuperclass || (L6_InheritanceCommonSuperclass = {}));
//# sourceMappingURL=MovingShape.js.map
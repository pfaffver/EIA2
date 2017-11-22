var L6_InheritanceCommonSuperclass;
(function (L6_InheritanceCommonSuperclass) {
    class Square extends L6_InheritanceCommonSuperclass.MovingShape {
        constructor(_x, _y) {
            super(_x, _y);
            console.log("Create square");
        }
        draw() {
            L6_InheritanceCommonSuperclass.crc2.fillStyle = this.color;
            L6_InheritanceCommonSuperclass.crc2.fillRect(this.x, this.y, this.size, this.size);
        }
    }
    L6_InheritanceCommonSuperclass.Square = Square;
})(L6_InheritanceCommonSuperclass || (L6_InheritanceCommonSuperclass = {}));
//# sourceMappingURL=Square.js.map
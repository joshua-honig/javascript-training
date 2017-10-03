var scs = window.scs = window.scs || {};
scs.version = '1.2.3.4';

var geometry = scs.geometry || scs.geometry || {};

function Shape(x, y) {
    this.x = x;
    this.y = y;
}

function Circle(x, y, radius) {
    Shape.call(this, x, y);
    this.radius = radius;
}

Circle.prototype = new Shape();
Circle.prototype.constructor = Circle;

var math = scs.math = scs.math || {};

math.clamp = function (val, min, max) {
    if (val < min) return min;
    if (val > max) return max;
    return val;
};

math.area = function (shape) {
    if (shape instanceof Circle) {
        return shape.radius * shape.radius * 3.14159;
    }

    return undefined;
};
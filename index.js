// Your code here
class Polygon {
    constructor(polygon) {
        this.polygon = polygon;
        let array = [];
    }

    get countSides() {
        return this.polygon.length;
    }

    get perimeter() {
        this.perimeter = array.reduce((accumlator, value) => {
            return accumlator + value;
        }, 0);
        return this.perimeter
    }
};

class Triangle extends Polygon {
    get isValid() {

    }
};

class Square extends Polygon {

};
const Circle = require("./test/allShapes");
const Square = require("./test/allShapes");
const Triangle = require("./test/allShapes");

describe("Circle", () => {
    it('should apply the correct color into the circle', () =>{
        const circle = new Circle();
        let color = 'red';
        expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="80" fill=${color}/>`);
    });
});

describe("Square", () => {
    it('should apply the correct color into the square', () =>{
        const square = new Square();
        let color = 'purple';
        expect(square.render()).toEqual(`<rect x="50" height="220" width="220" fill=${color}/>`);
    });
});

describe("Triangle", () => {
    it('should apply the correct color into the triangle', () =>{
        const triangle = new Triangle();
        let color = 'brown';
        expect(triangle.render()).toEqual(`<polygon height="100%" width="100%" points="0, 200 300, 200 150, 0" fill=${color}/>`);
    });
});
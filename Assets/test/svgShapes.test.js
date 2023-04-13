const {Circle, Square, Triangle} = require('./svgShapes');


describe("Circle", () => {
    it('should apply the correct color into the circle with the correct text and text color.', () =>{
        const circle = new Circle();
        let colorS = 'red';
        let text = "yoo";
        let colorT = "green";
        circle.setColor(colorS);
        circle.setText(text);
        circle.setTextColor(colorT);
        
        expect(circle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill=${colorS}/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${colorT}">${text}</text></svg>`);
    });
});

describe("Square", () => {
    it('should apply the correct color into the square with the correct text and text color.', () =>{
        const square = new Square();
        let colorS = 'purple';
        let text = "yuh";
        let colorT = "blue";
        square.setColor(colorS);
        square.setText(text);
        square.setTextColor(colorT);
        
        expect(square.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" height="220" width="220" fill=${colorS}/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${colorT}">${text}</text></svg>`);
    });
});

describe("Triangle", () => {
    it('should apply the correct color into the triangle with the correct text and text color.', () =>{
        const triangle = new Triangle();
        let colorS = 'brown';
        let text = "yee";
        let colorT = "yellow";
        triangle.setColor(colorS);
        triangle.setText(text);
        triangle.setTextColor(colorT);
        
        expect(triangle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon height="100%" width="100%" points="0, 200 300, 200 150, 0" fill=${colorS}/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${colorT}">${text}</text></svg>`);
    });
});
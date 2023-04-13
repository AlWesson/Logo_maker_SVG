class allShapes{

    constructor(color) {
        this.color = color;
    }
    
}

class Circle extends allShapes{
    constructor(color){
        super(color);
    };
    render(){
        return `<circle cx="150" cy="100" r="80" fill=${color}/>`
    }
}

class Square extends allShapes{
    constructor(color){
        super(color);
    };
    render(){
        return `<rect x="50" height="220" width="220" fill=${color}/>`
    };
}

class Triangle extends allShapes{
    constructor(color){
        super(color);
    };
    render(){
        return `<polygon height="100%" width="100%" points="0, 200 300, 200 150, 0" fill=${color}/>`
    };
}

module.exports = {Circle, Square, Triangle}
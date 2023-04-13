class allShapes{

    constructor() {
        this.colorS = '';
        this.text = '';
        this.colorT = '';
    }
    setColor(colorS){
        this.colorS = (colorS);
    }
    setText(text){
        this.text = (text);
    }
    setTextColor(colorT){
        this.colorT = (colorT);
    }
}

class Circle extends allShapes{
    /*constructor(colorS, text, colorT){
        super(colorS, text, colorT);
    };*/
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill=${this.colorS}/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.colorT}">${this.text}</text></svg>`;
    }
}

class Square extends allShapes{
    /*constructor(colorS, text, colorT){
        super(colorS, text, colorT);
    };*/
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" height="220" width="220" fill=${this.colorS}/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.colorT}">${this.text}</text></svg>`;
    };
}

class Triangle extends allShapes{
    /*constructor(colorS, text, colorT){
        super(colorS, text, colorT);
    };*/
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon height="100%" width="100%" points="0, 200 300, 200 150, 0" fill=${this.colorS}/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.colorT}">${this.text}</text></svg>`;
    };
}

module.exports = {Circle, Square, Triangle}
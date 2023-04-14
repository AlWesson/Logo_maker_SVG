const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require('./Assets/test/svgShapes');


const questions = [
    {
        type: "input",
        name: "text",
        message: "Please enter up to 3 characters.",
        validate: function(input) {
            if(input.length <= 3){
                return true;
            }
            else {
                return("Please enter only up to 3 characters.");
            }
        }
    },
    {
        type: "input",
        name: "tColor",
        message: "Please enter the color you wish the text to be. (hexadecimal may be used.)",
    },
    {
        type: "input",
        name: "sColor",
        message: "Please enter the color you wish the shape to be. (hexadecimal may be used.)",
    },
    {
        type: "list",
        name: "shape",
        message: "Please choose which shape you desire.",
        choices: ["Circle", "Square", "Triangle"],
    },
];
//writes new file into 'Image' folder.
function write(fileName){
    fs.watchFile('./Images/logo.svg', fileName, (err) => err ? console.log(err): console.log("Generated logo.svg"));
}

function init() {
    inquirer.prompt(questions).then((answers) =>{
        const fileName = processing(answers);
        write(fileName);
    });
}

function processing(input){
    textChoice = input.text;
    textColor = input.tColor;
    shapeColor = input.sColor;
    shapeChoice = input.shape;
    let selection;
    
    if(shapeChoice === 'Circle'){
        selection = new Circle();
    }
    else if(shapeChoice === 'Square'){
        selection = new Square();
    }
    else if(shapeChoice === 'Triangle'){
        selection = new Triangle();
    }

    selection.setColor(shapeColor);
    selection.setText(textChoice);
    selection.setTextColor(textColor);

    renderString = selection.render();

    return renderString;
}

init();
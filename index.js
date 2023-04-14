const fs = require('fs');
const inquirer = require('inquirer');
// path where each shape class comes from.
const {Circle, Square, Triangle} = require('./Assets/test/svgShapes');

// questions prompted to the user, and takes their input to use for the logo.svg image customization.
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
    fs.writeFile('./Images/logo.svg', fileName, (err) => err ? console.log(err): console.log("Generated logo.svg"));
}
// initializes the questions and throws answers into the "processing" function.
function init() {
    inquirer.prompt(questions).then((answers) =>{
        const fileName = processing(answers);
        
    });
}
// this function implements all the answers taken from the user and inputs them into the needed areas from the shape class to customize the svg logo.
// 
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
    selection.setTextColor(textColor);
    selection.setText(textChoice);

    renderString = selection.render();
    write(renderString);
    //return renderString;
}

init();
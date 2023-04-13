//const inquirer = require('inquirer');
//const Circle = require('./svgShapes');
//const Square = require('./svgShapes');
//const Triangle = require('./svgShapes');

const questions = [
    {
        type: "input",
        name: "test",
        message: "Please enter up to 3 characters.",
    },
    {
        type: "input",
        name: "tColor",
        message: "Please enter the color you wish the text to be.",
    },
    {
        type: "input",
        name: "sColor",
        message: "Please enter the color you wish the shape to be.",
    },
    {
        type: "list",
        name: "shape",
        message: "Please choose which shape you desire.",
        choices: ["Circle", "Square", "Triangle"],
    },
];


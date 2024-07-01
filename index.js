// after npm init, npm install inquirer, checked in json for dependency, add the two required packages for functionality

// const port = process.env.PORT || 3001
// const inquirer = require('inquirer');

// import('inquirer').then((inquirer) => {
// const fs = require('fs');

//They ask for 3 shapes
// const shapes = ['circle', 'triangle', 'square'];

// need a prompt which means a questionnaire, text, text color, shape, shape color
// ?


    // type input asks user to input text, name value text stores the user input, message value, rules, this displays for user when asked for input, have to use list instead of input under type for the array of shapes created

    
// the answers from quesionnaire , THEN an svg file is created named logo.svg
// the words generated logo.svg should appear in the command line while the svg file is being created
// open the logo.svg file in browser
// THEN a 300*200image mathes results 

// Use dynamic import to import inquirer
import inquirer from "inquirer";
import fs from "fs/promises";

const shapes = ['circle', 'triangle', 'square'];
  
    // Ensure inquirer.prompt is used correctly within the import callback
    inquirer.prompt([
      {
        name: 'text',
        type: 'input',
        message: 'Type your logo text (up to 3 characters):',
      },
      {
        name: 'textColor',
        type: 'input',
        message: 'What color do you want your logo text to be?',
      },
      {
        name: 'shape',
        type: 'list',
        message: 'Choose your shape:',
        choices: shapes,
      },
      {
        name: 'shapeColor',
        type: 'input',
        message: 'What color do you want your logo shape to be?',
      }
    ])
    .then((answers) => {
      console.log('Generated logo.svg');
      console.log('Answers:', answers);

      fs.writeFile('logo.svg', data, (err) => {
        if (err) {
          console.error(err);
        }else {
  
      )}
    })
    .catch(error => {
      console.error('Error occurred during prompt:', error);
    });

  
    

   
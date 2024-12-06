// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js"

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",  
  },
  {
    type: "input",
    message: "What is the description of your project?",
    name: "description",  
  },
  {
    type: "input",
    message: "What is the Installation process?",
    name: "installation",  
  },
  {
    type: "input",
    message: "How will this project be used?",
    name: "usage",  
  },
  {
    type: "list",
    message: "Select the License for your project?",
    name: "license", 
    choices: ["MIT", "ISC", "Mozilla"] 
  },
  {
    type: "input",
    message: "What are the contribution of your project?",
    name: "contribution",  
  },
  {
    type: "input",
    message: "Test instructions",
    name: "tests",  
  },
  {
    type: "input",
    message: "Enter your GitHub username:",
    name: "github",  
  },
  {
    type: "input",
    message: "Enter your email address:",
    name: "email",  
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  let markdown = generateMarkdown(data);
  fs.writeFile(fileName, markdown, (err) =>
    err
      ? console.error(err)
      : console.log("Successfully created the README.md!")
  );
}

// TODO: Create a function to initialize app

function init() {
  inquirer.prompt(questions).then((answers) =>{
    console.log(JSON.stringify(answers, null, " "));
    writeToFile("README.md", answers);
  });
}

// Function call to initialize app
init();

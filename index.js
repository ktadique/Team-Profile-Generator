const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

const employeeTeam = [];

//function to prompt user for manager information
function initManager() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter the manager's name:",
        name: "managerName",
      },
      {
        type: "input",
        message: "Please enter the manager's ID number:",
        name: "managerId",
      },
      {
        type: "input",
        message: "Please enter the manager's email:",
        name: "managerEmail",
      },
      {
        type: "input",
        message: "Please enter the manager's office number:",
        name: "managerOffice",
      },
    ])
    .then((response) => {
      const manager = new Manager(
        response.managerName,
        response.managerId,
        response.managerEmail,
        response.managerOffice
      );
      employeeTeam.push(manager);
    });
}

//function to prompt user for engineer information

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter the engineer's name:",
        name: "engineerName",
      },
      {
        type: "input",
        message: "Please enter the engineer's ID number:",
        name: "engineerId",
      },
      {
        type: "input",
        message: "Please enter the engineer's email:",
        name: "engineerEmail",
      },
      {
        type: "input",
        message: "Please enter the engineer's GitHub username:",
        name: "engineerGitHub",
      },
    ])
    .then((response) => {
      const engineer = new Engineer(
        response.engineerName,
        response.engineerId,
        response.engineerEmail,
        response.engineerGitHub
      );
      employeeTeam.push(engineer);
      nextEmployee();
    });
}

//function to prompt user for intern information

//function to prompt user for next employee

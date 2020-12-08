#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

const prompt = inquirer.createPromptModule();

// Questions after the card 
const questions = [
    {
        type: "list",
        name: "action",
        message: "What you want to do?/Τι θέλετε να κάνετε;",
        choices: [
            {
                name: `Send me an ${chalk.green.bold("email")}?/Αποστολή  ${chalk.blue.bold("email")}`,
                value: () => {
                    open("mailto:alexkarpen@gmail.com");
                    console.log("\nDone, see you soon/Ευχαριστώ!\n");
                }
            },
            {
                name: "Just quit/Τίποτα",
                value: () => {
                    console.log("Good Bye!\n/Καλή συνέχεια!\n");
                }
            }
        ]
    }
];

// Data for the card
const data = {
    name: chalk.bold.green("        Alexandros Karpenisiotis"),
    work: `${chalk.white("Senior Frontend Web Developer")} ${chalk
        .hex("#ED8034")
        .bold("Hyperstack")}`,
    github: chalk.gray("https://github.com/") + chalk.green("alexkarpen"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("alexkarpen"),
    web: chalk.cyan("https://alexkarpen.com"),
    npx: chalk.red("npx") + " " + chalk.white("alexkarpen"),

    labelWork: chalk.white.bold("       Work:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelWeb: chalk.white.bold("        Web:"),
    labelCard: chalk.white.bold("       Card:")
};

// Build the card
const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        `${data.labelWeb}  ${data.web}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic(
            "If it is possible, i can do it... i think!"
        )}`,
        `${chalk.italic("You can serve your curiosity by contacting me!")}`,
        `${chalk.italic("Το εξήγησα στα Αγγλικά!")}`
    ].join("\n"),
    {
        margin: 4,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "green"
    }
);

// Print the card
console.log(me);

// Optional tip to help users use the links
const tip = [
    `Tip: Try ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");

// Show the tip 
console.log(tip);

// Ask the Inquirer questions. 
prompt(questions).then(answer => answer.action());
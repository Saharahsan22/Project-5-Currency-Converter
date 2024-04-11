#! /usr/bin/env node
// inquirer install
import inquirer from "inquirer";
import chalk from "chalk";
//currency conversion objects
let currencyConversion = {
    "PKR": {
        "USD": 0.0036,
        "GBP": 0.0028,
        "PKR": 1,
        "INR": 0.30,
        "CAD": 0.0049,
        "AUD": 0.0055,
    },
    "GBP": {
        "USD": 1.27,
        "GBP": 1,
        "PKR": 351.73,
        "INR": 105.41,
        "CAD": 1.72,
        "AUD": 1.91,
    },
    "USD": {
        "USD": 1,
        "GBP": 0.79,
        "PKR": 277.52,
        "INR": 83.18,
        "CAD": 1.36,
        "AUD": 1.51,
    },
    "INR": {
        "USD": 0.012,
        "GBP": 0.0095,
        "PKR": 3.33,
        "INR": 1,
        "CAD": 0.016,
        "AUD": 0.018,
    },
    "CAD": {
        "USD": 0.74,
        "GBP": 0.58,
        "PKR": 204.51,
        "INR": 61.32,
        "CAD": 1,
        "AUD": 1.11,
    },
    "AUD": {
        "USD": 0.66,
        "GBP": 0.52,
        "PKR": 183.77,
        "INR": 55.11,
        "CAD": 0.90,
        "AUD": 1,
    },
};
console.log(chalk.bold.bgYellow("******************** WELCOME TO CURRENCY CONVERTER BY SAHAR AHSAN********************"));
// promote user for input
const answer = await inquirer.prompt([{
        type: "list",
        name: "from",
        message: (chalk.bold.bgBlue("please select your currency")),
        choices: ["PKR", "USD", "GBP", "INR", "CAD", "AUD"],
    },
    {
        type: "list",
        name: "to",
        message: (chalk.bold.bgGreen("please select your conversion rate")),
        choices: ["PKR", "USD", "GBP", "INR", "CAD", "AUD"],
    },
    {
        type: "number",
        name: "amount",
        message: (chalk.bold.bgMagentaBright("please enter the amount wish to convert")),
    }
]);
// Destructuring user input
const { from, to, amount } = answer;
// perform currency conversion
if (from && to && amount) {
    let result = amount * currencyConversion[from][to];
    console.log((chalk.bold.bgRedBright) `your currency conversion from ${from} to ${to} is ${result}`);
    console.log(chalk.bold.bgYellow("******************** THANK YOU FOR USING CURRENCY CONVERTER********************"));
}
else {
    console.log("invalid conversion");
}

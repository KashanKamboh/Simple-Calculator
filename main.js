import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgBlueBright.bold("\n\tWellCome To 'Code With Kashan' - Calculator\n"));
let answer = await inquirer.prompt([
    {
        name: "firstnumber",
        type: "number",
        message: "Enter first number :"
    },
    {
        name: "secondnumber",
        type: "number",
        message: "Enter second number :"
    },
    {
        message: "Select One Operator to Perform Operations :",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    },
]);
if (answer.operator === "Addition") {
    console.log(chalk.greenBright(answer.firstnumber + answer.secondnumber));
}
else if (answer.operator === "Subtraction") {
    console.log(chalk.greenBright(answer.firstnumber - answer.secondnumber));
}
else if (answer.operator === "Multiplication") {
    console.log(chalk.greenBright(answer.firstnumber * answer.secondnumber));
}
else if (answer.operator === "Division") {
    console.log(chalk.greenBright(answer.firstnumber / answer.secondnumber));
}
else {
    console.log(chalk.redBright("Invalid Number"));
}

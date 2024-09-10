import chalk from "chalk";
import validator from "validator";

// console.log(chalk.blue.italic("Hello World ! "));
// console.log(chalk.blue.underline("Hello World ! "));
// console.log(chalk.red.inverse("Hello World ! "));

// console.log(chalk.green.underline.inverse("Success"));
// console.log(chalk.red.underline.inverse("False"));

const res = validator.isEmail("smit@sharma.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
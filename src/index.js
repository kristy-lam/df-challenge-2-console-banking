import chalk from "chalk";
import Account from "./Account.js";
import DateGenerator from "./DateGenerator.js";
import MessagePrinter from "./MessagePrinter.js";

console.log(chalk.blue('==========================================='));
console.log(chalk.blue('CODE DEMONSTRATION'));
console.log(chalk.blue('==========================================='));

console.log(chalk.green('Display on terminal on load:\n' +
    'Given a client makes a deposit of 1000 on 10-01-2012,\n' +
    'a deposit of 2000 on 13-01-2012,\n' +
    'and a withdrawal of 500 on 14-01-2012.\n' +
    'When she prints her bank statement,\n' +
    'she would see -\n'))

const demoAccount = new Account();
demoAccount.deposit(DateGenerator.getDefaultDate1(), 1000);
demoAccount.deposit(DateGenerator.getDefaultDate2(), 2000);
demoAccount.withdrawal(DateGenerator.getDefaultDate3(), 500);
demoAccount.getTransactions();

console.log(chalk.grey('(From now on, today\'s date is generated ' +
    'automatically\n as clients would not have to input the ' +
    'date of transactions)\n'));

// Demo case 1
console.log(chalk.blue('DEMO CASE 1'));
console.log(chalk.green('She now deposits 750.50 into her account.'));
console.log(chalk.magenta('Message from terminal to client:'));
demoAccount.deposit(DateGenerator.generateToday(),
    750.123456, MessagePrinter.printMessage);

console.log(chalk.green('She now prints a bank statement.'));
demoAccount.getTransactions();

// Demo case 2
console.log(chalk.blue('DEMO CASE 2'));
console.log(chalk.green('She now tries to deposit -500 into her account.'));
console.log(chalk.magenta('Message from terminal to client:'));
demoAccount.deposit(DateGenerator.generateToday(),
    -500, MessagePrinter.printMessage);

console.log(chalk.green('She now prints a bank statement \n(which remains ' +
    'the same as her previous deposit \nwas unsuccessful).'));
demoAccount.getTransactions();

// Demo case 3
console.log(chalk.blue('DEMO CASE 3'));
console.log(chalk.green('She now tries to deposit 0 into her account.'));
console.log(chalk.magenta('Message from terminal to client:'));
demoAccount.deposit(DateGenerator.generateToday(),
    0, MessagePrinter.printMessage);

console.log(chalk.green('She now prints a bank statement \n(which remains ' +
    'the same as her previous deposit \nwas unsuccessful).'));
demoAccount.getTransactions();

// Demo case 4
console.log(chalk.blue('DEMO CASE 4'));
console.log(chalk.green('She now withdraws 85.50 from her account.'));
console.log(chalk.magenta('Message from terminal to client:'));
demoAccount.withdrawal(DateGenerator.generateToday(),
    85.50, MessagePrinter.printMessage);

console.log(chalk.green('She now prints a bank statement.'));
demoAccount.getTransactions();

// Demo case 5
console.log(chalk.blue('DEMO CASE 5'));
console.log(chalk.green('She now tries to withdraw 0 from her account.'));
console.log(chalk.magenta('Message from terminal to client:'));
demoAccount.withdrawal(DateGenerator.generateToday(),
    0, MessagePrinter.printMessage);

console.log(chalk.green('She now prints a bank statement \n(which remains ' +
    'the same as her previous withdrawal \nwas unsuccessful).'));
demoAccount.getTransactions();

// Demo case 6
console.log(chalk.blue('DEMO CASE 6'));
console.log(chalk.green('She now tries to withdraw -350.70 from her account.'));
console.log(chalk.magenta('Message from terminal to client:'));
demoAccount.withdrawal(DateGenerator.generateToday(),
    -350.70, MessagePrinter.printMessage);

console.log(chalk.green('She now prints a bank statement \n(which remains ' +
    'the same as her previous withdrawal \nwas unsuccessful).'));
demoAccount.getTransactions();

// Demo case 7
console.log(chalk.blue('DEMO CASE 7'));
console.log(chalk.green('She now tries to withdraw 3200 from her account,\n' +
    'which is more than the current balance of 3165.'));
console.log(chalk.magenta('Message from terminal to client:'));
demoAccount.withdrawal(DateGenerator.generateToday(),
    3200, MessagePrinter.printMessage);

console.log(chalk.green('She now prints a bank statement \n(which remains ' +
    'the same as her previous withdrawal \nwas unsuccessful).'));
demoAccount.getTransactions();

console.log(chalk.blue('==========================================='));
console.log(chalk.blue('END OF CODE'));
console.log(chalk.blue('==========================================='));
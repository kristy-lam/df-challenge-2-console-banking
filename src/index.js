import chalk from "chalk";
import Account from "./Account.js";
import DateGenerator from "./DateGenerator.js";
import MessagePrinter from "./MessagePrinter.js";

console.log(chalk.blue('======================================='));
console.log(chalk.blue('CODE DEMONSTRATION'));
console.log(chalk.blue('======================================='));

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
const bankStatement1 = demoAccount.getTransactions();
console.log(bankStatement1);

console.log(chalk.grey('(From now on, today\'s date is generated ' +
    'automatically\n as clients would not have to input the ' +
    'date of transactions)\n'));
console.log(chalk.green('She now deposits 750.50 into her account.'));
demoAccount.deposit(DateGenerator.generateToday(), 750.50);

console.log(chalk.green('She now prints a bank statement.'));
const bankStatement2 = demoAccount.getTransactions();
console.log(bankStatement2);

console.log(chalk.green('She now withdraws 85.50 from her account.'));
demoAccount.withdrawal(DateGenerator.generateToday(), 85.50);

const bankStatement3 = demoAccount.getTransactions();
console.log(bankStatement3);

console.log(chalk.green('She now tries to withdraw 3200 from her account, ' +
    'which is more than the current balance.'));
demoAccount.withdrawal(DateGenerator.generateToday(), 3200);

const bankStatement4 = demoAccount.getTransactions();
console.log(bankStatement4);


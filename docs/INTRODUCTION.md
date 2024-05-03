# Introduction - Console Banking Application


## Purpose and Benefits

This application is to help bank account holders to -
1. view details of their account, including past transactions with dates, credit / debit amount, and updated balance;
2. deposit funds;
3. withdrawal funds, if they have sufficient balance to do so; and
4. print an account statement with date, credit / debit amount, and updated balance.
   
The application provides a handy way for account holders to view and manage their account at their finger tips. The application automatically generates an overview of the account holder's previous transactions so they do not have to record their savings and spending elsewhere. The benefits brought by the application are summarised below:

For the account holders:
- Previous transactions are clearly records so the account holder can decide their next action with the information. Accessing the application is quick and easy.
- To deposit or withdraw funds, they simply need to know how much they want to send into their account.
- If invalid inputs, such as negative numbers and an empty input, are provided as the amount of deposit or withdrawal, the application will not allow the account holder to proceed further, which avoid any mistakes in the transactions.
- The application will send a message to let the account holder know whether their deposit and or withdrawal is successful.
- The account statement generated is tidy, accurate and easy to read.

For business:
- The use of technology shows that our client is progressive and striving to improve customer service and experience, which will enhance client's image.
- The application's features can be customised and added in the future based on customers' needs.
- The automatic calculations of the balance minimises human errors during accounting and helps reduce the manpower resources required in making sure that calculations are timely and accurate.
- The introduction of the application hopefully becomes an incentive for potential customers to bank with the client.


## Features

The commands available for use (some are reserved for staff only) in the application are explained in the tables below. 

### For both account holders and staff:

| Command                                       | Parameters (see *italics* in Command)                       | Use of Command                                  | Conditions of Use                                                                                                                                                                                                                                                               |
| --------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| account.deposit(generateToday(), *amount*)    | Input *amount* (in number, can have up to 2 decimal places) | To deposit funds into the account               | Amount can only be a positive number. Falsy inputs (e.g. empty), negative numbers and any data types other than number are not allowed. For numbers with more than 2 decimal places, the rest of the decimals will be truncated.                                                |
| account.withdrawal(generateToday(), *amount*) | Input *amount* (in number, can have up to 2 decimal places) | To withdraw funds from the account              | Amount can only be a positive number, and cannot be larger than the current balance. Falsy inputs (e.g. empty), negative numbers and any data types other than number are not allowed. For numbers with more than 2 decimal places, the rest of the decimals will be truncated. |
| account.getTransactions()                     | Nil                                                         | To print account statement to view transactions | Nil                                                                                                                                                                                                                                                                             |

### For staff ONLY:

| Command                                                                                         | Parameters (see *italics* in Command)                                        | Use of Command                                                      | Conditions of Use                                                                                                     |
| ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| new Account(*initialBalance*)                                                                   | Optional: staff can assign an initial balance. Default initial balance is 0. | To create a new account for customer                                | Amount can only be a number. For numbers with more than 2 decimal places, the rest of the decimals will be truncated. |
| DateGenerator.getDefaultDate1() DateGenerator.getDefaultDate2() DateGenerator.getDefaultDate3() | Nil                                                                          | To generate the three default dates as specified in the README file | To be used as the first parameter in account.deposit() and account.withdrawal() methods                               |


## Risks

Staff members who are required to use and/or manage the application need to be familiar with the commands they are responsible to use. Although the application helps in calculating account balance and record transactions, it does not cover any logic, rules and regulations which may be outside the user requirements provided at the application's development.

As the application is still in its initial stage of development, please report any issues users may discover or any additional requirements for the application to the developer so that the functionalities can be further improved or developed.


const {
    addExpensesHandler
} = require('./api/expenses/expensesHandler');

const [ , , command, ...args ] = process.argv;

switch(command) {
    case 'add':
        addExpensesHandler(args[1], args[3]);
        break;
    default: 
        console.log(`command ${command} tidak tersedia`);
        break;
};
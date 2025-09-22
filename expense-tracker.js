const {
    addExpensesHandler,
    listExpensesHandler,
    summaryExpensesHandler,
    deleteExpensesHandler
} = require('./api/expenses/expensesHandler');

const [ , , command, ...args ] = process.argv;

switch(command) {
    case 'add':
        addExpensesHandler(args[1], args[3]);
        break;
    case 'list': 
        listExpensesHandler();
        break;
    case 'summary':
        summaryExpensesHandler(args[1]);
        break;
    case 'delete':
        deleteExpensesHandler(args[1]);
        break;
    default: 
        console.log(`command ${command} tidak tersedia`);
        break;
};
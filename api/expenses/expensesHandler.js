const { 
    addExpensesService,
    listExpensesService,
    summaryExpensesService,
    deleteExpensesService
} = require('../../service/expensesService');

const addExpensesHandler = (description, amount) => {
    try {
        const numberAmount = parseInt(amount);
        const id = addExpensesService(description, numberAmount);

        console.log(`Expense added successfully (ID: ${id})`);
    } catch(error) {
        console.error(error);
    };
};

const listExpensesHandler = () => {
    try {
        const expenses = listExpensesService();
        console.log('ID Date Description Amount');

        for(const item of expenses) {
            console.log(item.id, item.date, item.description, item.amount);
        };
    } catch(error) {
        console.error(error);
    };
};

const summaryExpensesHandler = () => {
    try {
        const totalExpenses = summaryExpensesService();

        console.log(`Total expenses: $${totalExpenses}`);
    } catch(error) {
        console.error(error);
    }
};

const deleteExpensesHandler = (expenseId) => {
    try {
        const numberExpenseId = parseInt(expenseId);

        const result = deleteExpensesService(numberExpenseId);
        console.log(result);
    } catch(error) {
        console.error(error);
    };
}

module.exports = {
    addExpensesHandler,
    listExpensesHandler,
    summaryExpensesHandler,
    deleteExpensesHandler
};
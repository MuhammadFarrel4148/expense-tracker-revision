const { 
    addExpensesService,
    listExpensesService
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

module.exports = {
    addExpensesHandler,
    listExpensesHandler
};
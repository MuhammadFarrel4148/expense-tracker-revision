const { 
    addExpensesService
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

module.exports = {
    addExpensesHandler
};
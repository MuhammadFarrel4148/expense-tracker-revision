const {
    loadExpenses,
    savedExpenses
} = require('./fileService');

const getID = (expenses) => {
    if(expenses.length === 0) {
        return 1;
    };

    const maxId = Math.max(...expenses.map((expense) => expense.id));
    return maxId + 1;
};

const addExpensesService = (description, amount) => {
    try {
        const loadData = loadExpenses();

        const id = getID(loadData);
        const date = new Date().toISOString().slice(0, 10);

        const newExpense = {
            id,
            date,
            description,
            amount
        };

        loadData.push(newExpense);
        const checkPush = loadData.filter((data) => data.id === id);

        if(checkPush.length === 0) {
            throw new Error('gagal menambahkan data expense');
        };

        savedExpenses(loadData);
        return id;
    } catch(error) {
        console.error(error);
    }
};

module.exports = {
    addExpensesService
};
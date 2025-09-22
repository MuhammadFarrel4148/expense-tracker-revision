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

const listExpensesService = () => {
    const expenses = loadExpenses();

    if(expenses === '') {
        return `There's no expenses`
    };

    return expenses;
};

const summaryExpensesService = (month) => {
    const expenses = loadExpenses();
    let totalExpenses;

    if(expenses === '') {
            return 0;
    };

    if(month === undefined) {
        totalExpenses = expenses.reduce((acc, currentValue) => {
            return acc + currentValue.amount;
        }, 0);

        return totalExpenses;   
    } else {
        const filteredExpenses = expenses.filter((expense) => expense.date.substring(6, 7) === month);
        
        if(filteredExpenses.length === 0) {
            return 0;
        };

        totalExpenses = filteredExpenses.reduce((acc, currentValue) => {
            return acc + currentValue.amount;
        }, 0);
    };

    return totalExpenses
};

const deleteExpensesService = (expenseId) => {
    try {
        const expenses = loadExpenses();

        const expenseIndex = expenses.findIndex((expense) => expense.id === expenseId);

        if(expenseIndex === -1) {
            return `Expense tidak ditemukan`;   
        };

        expenses.splice(expenseIndex, 1);

        if((expenses.findIndex((expense) => expense.id === expenseId)) === -1) {
            savedExpenses(expenses);
            return `Expense deleted successfully`;
        };
        
    } catch(error) {
        console.error(error);
    };
};

module.exports = {
    addExpensesService,
    listExpensesService,
    summaryExpensesService,
    deleteExpensesService
};
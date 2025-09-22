const fs = require('fs');
const path = require('path');

const EXPENSES_FILE = path.join(__dirname, '..', 'model', 'expenses.json');

const loadExpenses = () => {
    try {
        if(!fs.existsSync(EXPENSES_FILE)) {
            return [];
        };

        const dataBuffer = fs.readFileSync(EXPENSES_FILE);
        const data = dataBuffer.toString();

        if(data === '') {
            return [];
        };

        return JSON.parse(data);
    } catch(error) {
        console.error(error);
        return [];
    };
};  

const savedExpenses = (expenses) => {
    const dataString = JSON.stringify(expenses, null, 2);
    fs.writeFileSync(EXPENSES_FILE, dataString);
};

module.exports = {
    loadExpenses,
    savedExpenses
};
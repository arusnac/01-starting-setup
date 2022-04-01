import './RenderExpenses.css';

import Card from './Card'
import FilterYear from './FilterYear';
import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';


function RenderExpenses(props) {
    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
        console.log(selectedYear)
    };

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (<div>

        <Card className="expenses"><FilterYear selected={filteredYear} onFilterChange={filterChangeHandler}></FilterYear>
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList expenses={filteredExpenses} />

        </Card></div >);
};

export default RenderExpenses;
import React from 'react';
import './FilterYear.css'

const FilterYear = (props) => {

    const filterChangeHandler = (event) => {
        props.onFilterChange(event.target.value);
    };

    return (
        <div className="expenses-filter">
            <div className='expenses-filter__control'>
                <label>Select a year</label>
                <select value={props.selected} onChange={filterChangeHandler}>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
            </div>
        </div>
    );
};

export default FilterYear;
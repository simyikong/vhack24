import React, { useState } from 'react';
import { SideNav } from '../../Components/SideNav';

export const EnterIncExp = () => {
    const [income, setIncome] = useState('');
    const [expenses, setExpenses] = useState('');

    const handleIncomeChange = (event) => {
        setIncome(event.target.value);
    };

    const handleExpensesChange = (event) => {
        setExpenses(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle the form submission here
    };

    return (
        <div className="flex">
            <SideNav /> 
            <div className="flex-grow flex-col items-center min-h-screen bg-gray-100 py-2">
                <h1 className="text-2xl font-bold mb-4">Enter Income and Expenses</h1>
                <form onSubmit={handleSubmit} className="w-full max-w-sm">
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="income">
                                Income
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input type="number" id="income" value={income} onChange={handleIncomeChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="expenses">
                                Expenses
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input type="number" id="expenses" value={expenses} onChange={handleExpensesChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                        </div>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
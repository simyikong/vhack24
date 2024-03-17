import React, { useState } from 'react';
import { SideNav } from '../../Components/SideNav';
import { AssetsChart } from '../../AssetsChart';


const generateData = () => {
    const data = [];
    const now = Date.now();
    const oneMonth = 30 * 24 * 60 * 60 * 1000; // Number of milliseconds in a month

    // Generate data for the past 6 months
    for (let i = 6; i > 0; i--) {
        const date = new Date(now - i * oneMonth);
        const amount = Math.random() * 10000; // Generate a random amount between 0 and 10000
        data.push({ date: date.toISOString(), amount });
    }

    // Generate data for the next 6 months
    for (let i = 1; i <= 6; i++) {
        const date = new Date(now + i * oneMonth);
        const amount = Math.random() * 10000; // Generate a random amount between 0 and 10000
        data.push({ date: date.toISOString(), amount });
    }

    return data;
};

export const CalcInv = () => {
    const [approach, setApproach] = useState('balanced');

    const handleApproachChange = (event) => {
        setApproach(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Calculate the recommended investment amount based on the selected approach
    };

    const assetsData = generateData(); 

    return (
        <div className="flex">
            <SideNav /> 
            <div className="flex-grow flex-col items-center min-h-screen bg-gray-100 py-2">
                <h1 className="text-2xl font-bold mb-4">Calculate Investment</h1>
                <form onSubmit={handleSubmit} className="w-full max-w-sm">
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="approach">
                                Approach
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <select id="approach" value={approach} onChange={handleApproachChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
                                <option value="conservative">Conservative</option>
                                <option value="balanced">Balanced</option>
                                <option value="risk">Risk-oriented</option>
                            </select>
                        </div>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                Calculate
                            </button>
                        </div>
                    </div>
                </form>
                <AssetsChart data={assetsData} />{/* Add your graph component here */}
            </div>
        </div>
    );
};
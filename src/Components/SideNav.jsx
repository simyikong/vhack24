import React from 'react';
import { NavLink } from 'react-router-dom';

export const SideNav = () => {
    return (
        <div className="w-64 min-h-screen bg-gray-200 p-4">
            <h1 className="text-2xl font-bold mb-4">Navigation</h1>
            <ul>
                <li>
                    <NavLink to="/Budget/CalcInv" activeClassName="text-purple-500" className="block py-1 text-gray-500 hover:text-purple-500">
                        Calculate Investment
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Budget/EnterIncExp" activeClassName="text-purple-500" className="block py-1 text-gray-500 hover:text-purple-500">
                        Enter Income and Expenses
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};
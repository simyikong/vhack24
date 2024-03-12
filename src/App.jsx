import React, {useEffect, useState} from 'react';
import Navbar from "./Components/Navbar/Navbar";
import {Route, Router, Routes} from 'react-router-dom';
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {EmptyPg1} from "./pages/EmptyPg1";
import {EmptyPg2} from "./pages/EmptyPg2";
import {EmptyPg3} from "./pages/EmptyPg3";
import "./App.css";
import Dashboard from "./Components/Stocks/Dashboard";
import StockContext from "./context/StockContext";
import ThemeContext from "./context/ThemeContext";

const App = () => {
    const currentTheme = localStorage.getItem('current_theme');
    const [theme, setTheme] = useState(currentTheme ? currentTheme : 'light');
    const [darkMode, setDarkMode] = useState(false);
    const [stockSymbol, setStockSymbol] = useState("MSFT");

    useEffect(() => {
        localStorage.setItem('current_theme', theme);
    }, [theme]);

    return (
        <div className={`container ${theme}`}>
            <Navbar theme={theme} setTheme={setTheme}/>
            <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
                <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/emptyPg1" element={<EmptyPg1/>}/>
                        <Route path="/emptyPg2" element={<EmptyPg2/>}/>
                        <Route path="/emptyPg3" element={<EmptyPg3/>}/>
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Routes>
                </ThemeContext.Provider>
            </StockContext.Provider>
        </div>
    );
}

export default App;


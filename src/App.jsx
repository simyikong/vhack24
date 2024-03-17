// eslint-disable-next-line no-unused-vars
import React , {useEffect, useState} from 'react';
import Navbar from "./Components/Navbar/Navbar";
import {Route, Routes} from 'react-router-dom';

// import data from "./data";

import {Home} from "./pages/Home";
import About from "./pages/About";
import RegistrationForm from "./pages/RegistrationForm";
import SignInForm from "./pages/SignInForm";
import {Community} from "./pages/CommunityPages/Community";
import {Profile} from "./pages/Profile";
import {EditProfile} from "./pages/EditProfile";
import {Budget} from "./pages/Budget";

import "./App.css";
import Dashboard from "./Components/Stocks/Dashboard";
import StockContext from "./context/StockContext";
import ThemeContext from "./context/ThemeContext";

import Groups from "./pages/CommunityPages/Groups";
import Users from "./pages/CommunityPages/Users";
import Companies from "./pages/CommunityPages/Companies";
import Bookmarks from "./pages/CommunityPages/Bookmarks";

const App = () => {
    const currentTheme = localStorage.getItem('current_theme');
    const [theme, setTheme] = useState(currentTheme ? currentTheme : 'light');
    const [darkMode, setDarkMode] = useState(false);
    const [stockSymbol, setStockSymbol] = useState("MSFT");

    // const [exchanges, setExchanges] = useState([]);
    // const [stocks, setStocks] = useState([]);
  
    // const getData = () => {
    //   const exchanges = data.exchanges;
    //   const stocks = data.stocks;
    //     console.log(stocks);
    //   return {
    //     exchanges,
    //     stocks,
    //   };
    // };
  
    // useEffect(() => {
    //   const { exchanges, stocks } = getData();
    //   setExchanges(exchanges);
    //   setStocks(stocks);
    // }, []);
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
                        <Route path="/RegistrationForm" element={<RegistrationForm/>}/>
                        <Route path="/SignInForm" element={<SignInForm/>}/>
                        <Route path="/Profile" element={<Profile/>}/>
                        <Route path="/Community" element={<Community/>}/>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="EditProfile" element={<EditProfile />}/>
                        <Route path="Budget" element={<Budget />}/>
                        <Route path="Explore" element={<Community />} />
                        <Route path="/Groups" element={<Groups />} />
                        <Route path="/Users" element={<Users />} />
                        <Route path="/Companies" element={<Companies />} />
                        <Route path="/Bookmarks" element={<Bookmarks />} />
                    </Routes>
                </ThemeContext.Provider>
            </StockContext.Provider>
        </div>
    );
}

export default App;
 

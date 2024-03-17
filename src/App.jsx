import React, {useEffect, useState} from 'react';
import Navbar from "./Components/Navbar/Navbar";
import {Route, Routes} from 'react-router-dom';
import * as CanvasJS from 'canvasjs';
import $ from 'jquery';

// import data from "./data";
import AI from './pages/AI';
import About from "./pages/About";
import RegistrationForm from "./pages/RegistrationForm";
import SignInForm from "./pages/SignInForm";
import {Community} from "./pages/CommunityPages/Community";
import {Profile} from "./pages/Profile";
import {EditProfile} from "./pages/EditProfile";

import {Budget} from "./pages/Budget/Budget";
import { EnterIncExp } from './pages/Budget/EnterIncExp';
import { CalcInv } from './pages/Budget/CalcInv';

import "./App.css";
import Dashboard from "./Components/Stocks/Dashboard";
import StockContext from "./context/StockContext";
import ThemeContext from "./context/ThemeContext";

import Groups from "./pages/CommunityPages/Groups";
import Users from "./pages/CommunityPages/Users";
import Companies from "./pages/CommunityPages/Companies";
import Bookmarks from "./pages/CommunityPages/Bookmarks";
import StockDetails from "./Components/Stocks/StockData";
import AllStocks from "./Components/Stocks/AllStocks";

const App = () => {
    const currentTheme = localStorage.getItem('current_theme');
    const [theme, setTheme] = useState(currentTheme ? currentTheme : 'light');
    const [darkMode, setDarkMode] = useState(false);
    const [stockSymbol, setStockSymbol] = useState("MSFT");
    let [chart] = useState(null);
    let [dps] = useState([]);
    let [company] = useState(null);
    let [symbol] = useState(null);
    let [data1] = useState([]);

    useEffect(() => {
        localStorage.setItem('current_theme', theme);
    }, [theme]);

    // eslint-disable-next-line no-unused-vars
    // function download() {
    //     window.location = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=" + symbol + "&apikey=" + 'W3RLH13DI7DYTJIO' + "&datatype=csv";
    // }

    function getting_data() {
        if (company !== null) {
            $.getJSON("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=" + symbol + "&output size=full&apikey=" + 'W3RLH13DI7DYTJIO')
                .done(function (data) {
                    var date = data["Time Series (Daily)"]
                    let a = 20;
                    let b = 7;
                    for (var d in date) {
                        var r = d.split("-");
                        if (a-- > 0) {
                            var value = date[d];
                            dps.unshift({
                                x: new Date(parseInt(r[0]), parseInt(r[1]) - 1, parseInt(r[2])),
                                y: parseFloat(value["1. open"])
                            });
                            if (b-- > 0) {
                                let c = [d, value["1. open"], value["2. high"], value["3. low"], value["4. close"], value["5. adjusted close"], value["6. volume"]];
                                data1.push(c);
                            }
                        } else {
                            break;
                        }
                    }
                    graph();
                    drawTable();
                    document.getElementById("loading_container").style.display = "none";
                    document.getElementById("download_data").style.display = "block";
                    document.getElementById("companies").disabled = false;
                    document.getElementById("get_data").disabled = false;
                    document.getElementById("chartContainer").disabled = false;
                })
                .fail(function (textStatus, error) {
                    alert(textStatus + " " + error + "\nReload the page");
                })
        }
    }

    function graph() {
        chart = new CanvasJS.Chart("chartContainer", {
            title: {
                text: company
            }, animationEnabled: true, theme: "light2", axisY: {
                title: "Open Prices", includeZero: false
            }, axisX: {
                title: "Date", valueFormatString: "DD-MMM"
            }, data: [{
                type: "line", indexLabelFontSize: 16, dataPoints: dps
            }]
        });
        chart.options.data[0].dataPoints = dps;
        chart.render();
    }

    // eslint-disable-next-line no-unused-vars
    function getData() {
        if (chart !== null) {
            chart.destroy();
        }
        data1 = [];
        dps = [];
        document.getElementById("table_container").innerHTML = "";
        company = document.getElementById("companies").value;
        let r = company.split("(");
        symbol = r[1].substring(0, r[1].length - 1);
        document.getElementById("loading_container").style.display = "block";
        document.getElementById("download_data").style.display = "none";
        document.getElementById("companies").disabled = true;
        document.getElementById("get_data").disabled = true;
        document.getElementById("chartContainer").disabled = true;
        getting_data();
    }

    function drawTable() {
        var table_container = document.getElementById("table_container");
        var para = document.createElement("p");
        para.id = "para";
        var cell = document.createTextNode("RECENT END OF DAY PRICES");
        para.appendChild(cell);
        table_container.appendChild(para);
        var table = document.createElement("table");
        table.className = "table";
        var row = document.createElement("tr");
        let columns = ["Date", "Open", "High", "Low", "Close", "Adjusted Close", "Volume"];
        for (let i = 0; i < columns.length; i++) {
            var col = document.createElement("th");
            col.scope = "col";
            cell = document.createTextNode(columns[i]);
            col.appendChild(cell);
            row.appendChild(col);
        }
        table.appendChild(row);
        for (let i = 0; i < 7; i++) {
            row = document.createElement("tr");
            for (let j = 0; j < 7; j++) {
                col = document.createElement("td");
                cell = document.createTextNode(data1[i][j]);
                col.appendChild(cell);
                row.appendChild(col);
            }
            table.appendChild(row);
        }
        table_container.appendChild(table);
    }

    return (<div className={`container ${theme}`}>
            <Navbar theme={theme} setTheme={setTheme}/>
            <StockContext.Provider value={{stockSymbol, setStockSymbol}}>
                <ThemeContext.Provider value={{darkMode, setDarkMode}}>
                    <Routes>
                        <Route path="/" element={<AI/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/RegistrationForm" element={<RegistrationForm/>}/>
                        <Route path="/SignInForm" element={<SignInForm/>}/>
                        <Route path="/Profile" element={<Profile/>}/>
                        <Route path="/Community" element={<Community/>}/>
                        <Route path="/dashboard" element={<Dashboard/>}/>
                        <Route path="EditProfile" element={<EditProfile/>}/>
                        <Route path="Budget" element={<Budget/>}/>
                        <Route path="Explore" element={<Community/>}/>
                        <Route path="/Groups" element={<Groups/>}/>
                        <Route path="/Users" element={<Users/>}/>
                        <Route path="/Companies" element={<Companies/>}/>
                        <Route path="/Bookmarks" element={<Bookmarks/>}/>
                        <Route path="/stock-details" element={<StockDetails/>}/>
                        <Route path="/all-stock-pg" element={<AllStocks/>}/>
                        <Route path="/AI" element={<AI/>}/>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="EditProfile" element={<EditProfile />}/>
                        <Route path="Budget/Budget" element={<Budget />}/>
                        <Route path="Budget/EnterIncExp" element={<EnterIncExp />} />
                        <Route path="Budget/CalcInv" element={<CalcInv />} />
                        <Route path="Explore" element={<Community />} />
                        <Route path="/Groups" element={<Groups />} />
                        <Route path="/Users" element={<Users />} />
                        <Route path="/Companies" element={<Companies />} />
                        <Route path="/Bookmarks" element={<Bookmarks />} />

                    </Routes>
                    <div id="chartContainer"></div>
                    <div id="table_container"></div>
                </ThemeContext.Provider>
            </StockContext.Provider>
        </div>);
}

export default App;


// import { useHistory } from "react-router-dom";
import { useState } from "react";
import ThemeIcon from "./ThemeIcon";
// import {fetchStockCSV} from "../../services";
import React from "react";
import {fetchStockData} from "../../services";

const StockHeader = () => {
    const [selectedStock, setSelectedStock] = useState("AAPL");
    const handleDownloadData = async () => {
        // Fetch CSV data for the selected stock
        const data = await fetchStockData(selectedStock);
        // Encode the data to be passed as a URL parameter
        const encodedData = encodeURIComponent(JSON.stringify(data));
        // Redirect to a new page with the stock data as a query parameter
        window.location.href = `/stock-details?data=${encodedData}`;
    };

    const handleViewAllStocks = () => {
        // Redirect to the 'all-stock-pg' page
        window.location.href = "/all-stock-pg";
    };

    return (
        <>
            <div className="flex items-center font-bold px-4">
                <select
                    id="companies"
                    className="btn btn-light py-2 px-8 mr-2"
                    name="companies"
                    value={selectedStock}
                    onChange={(e) => setSelectedStock(e.target.value)}
                >
                    <option value="AAPL">Apple Inc(AAPL)</option>
                    <option value="MSFT">Microsoft Corp(MSFT)</option>
                    <option value="IBM">International Business Machine(IBM)</option>
                </select>
                <button
                    id="download_data"
                    onClick={handleDownloadData}
                    className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-1.5 px-4 rounded"
                >
                    Download Data(CSV)
                </button>
                <button
                    id="view_all_stocks"
                    onClick={handleViewAllStocks}
                    className="bg-green-400 hover:bg-green-700 text-white font-bold py-1.5 px-4 rounded"
                >
                    View All Stocks
                </button>

            </div>
            <ThemeIcon />
        </>
    );
};
export default StockHeader;

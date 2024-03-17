import React from "react";

const StockDetailsPage = () => {
    // Get the stock data from the URL query parameter
    const searchParams = new URLSearchParams(window.location.search);
    const data = searchParams.get("data");
    // Parse the data back to a JavaScript object
    const stockData = JSON.parse(decodeURIComponent(data));

    // Display the stock data however you want
    return (
        <div>
            <h1>Stock Details</h1>
            <pre>{JSON.stringify(stockData, null, 2)}</pre>
        </div>
    );
};

export default StockDetailsPage;

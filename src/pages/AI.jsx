// ./pages/AI.jsx

import React, {useEffect, useState} from 'react';
// import Plot from 'react-plotly.js';
import axios from 'axios';

const AI = () => {
    const [, setStockData] = useState({});

    useEffect(() => {
        const fetchStockData = async () => {
            try {
                const API_KEY = '72J5266S0H2QL30G';
                let StockSymbol = 'AMZN';
                const response = await axios.get(
                    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${StockSymbol}&apikey=${API_KEY}`
                );
                setStockData(
                    response.data['Time Series (Daily)']
                );
            } catch (error) {
                console.error('Error fetching stock data:', error);
            }
        };

        fetchStockData();
    }, []);

    // Check if stockData exists before accessing its keys
    // const dates =
    //     stockData ? Object.keys(stockData) : [];
    // const closingPrices =
    //     dates.map(
    //         date =>
    //             parseFloat(
    //                 stockData[date]['4. close'] || 0
    //             )
    //     );

    return (
        <center>
            <h1>AI Stock Price Prediction</h1>
            {/*<Plot*/}
            {/*    data={[*/}
            {/*        {*/}
            {/*            x: dates,*/}
            {/*            y: closingPrices,*/}
            {/*            type: 'scatter',*/}
            {/*            mode: 'lines+markers',*/}
            {/*            marker: { color: 'blue' },*/}
            {/*        }*/}
            {/*    ]}*/}
            {/*    layout={*/}
            {/*        {*/}
            {/*            width: 800,*/}
            {/*            height: 500,*/}
            {/*            title: 'Stock Market Prices'*/}
            {/*        }*/}
            {/*    }*/}
            {/*/>*/}
        </center>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export default AI;

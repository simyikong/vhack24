import { useEffect, useState } from 'react';
import SearchInput from "./searchInputBox";
import StockDetail from "./stockDetail";

const AllStocks = () => {
    const [stock, setStock] = useState('');

    useEffect(() => {
        seeStockDetail(stock);
    }, [stock]);

    const seeStockDetail = (symbol) => {
        setStock(symbol);
    }
    return (
        <div className="App">
            <SearchInput seeStockDetail={seeStockDetail} selectedStock={stock} />
            <StockDetail stockSymbol={stock} />
        </div>
    );
}

export default AllStocks;